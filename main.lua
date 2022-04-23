local sti = require "sti"

GRAVITY = 30

function Die()
  Player.body:setPosition(Player.respawnX, Player.respawnY)
end

function IsTouchingGround()
  for _, contact in pairs(Player.body:getContacts()) do
    local x1, y1 = contact:getPositions()
    if contact:isTouching() and y1 >= Player.body:getY() + 24 then
      return true
    end
  end
  return false
end

function HandlePlayerMovement(dt)
  Player.xVel, Player.yVel = Player.body:getLinearVelocity()
  Player.xVel = Player.xVel / 48
  Player.yVel = Player.yVel / 48

  if (love.keyboard.isDown("up") or love.keyboard.isDown("w")) and (Player.isJumping or IsTouchingGround()) then
    if Player.canJump then
      Player.canJump = false
      Player.isJumping = true
    end
    Player.yVel = Player.yVel - GRAVITY - Player.jumpPower * dt
    if Player.yVel < -Player.jumpPower then
      Player.yVel = -Player.jumpPower
      Player.isJumping = false
    end
  elseif Player.isJumping then
    Player.isJumping = false
  end

  if love.keyboard.isDown("left") or love.keyboard.isDown("a") then
    Player.direction = "left"
    if Player.xVel > Player.speed / 2 then
      Player.xVel = Player.speed / 2
    end
    if Player.xVel > -Player.speed then
      Player.xVel = Player.xVel - Player.speed * dt * 4;
      if Player.xVel < -Player.speed then
        Player.xVel = -Player.speed
      end
    end
  elseif love.keyboard.isDown("right") or love.keyboard.isDown("d") then
    Player.direction = "right"
    if Player.xVel < -Player.speed / 2 then
      Player.xVel = -Player.speed / 2
    end
    if Player.xVel < Player.speed then
      Player.xVel = Player.xVel + Player.speed * dt * 4;
      if Player.xVel > Player.speed then
        Player.xVel = Player.speed
      end
    end
  elseif Player.xVel > 0 then
    Player.xVel = Player.xVel - Player.speed * dt * 2
    if Player.xVel < 0 then
      Player.xVel = 0
    end
  elseif Player.xVel < 0 then
    Player.xVel = Player.xVel + Player.speed * dt * 2
    if Player.xVel > 0 then
      Player.xVel = 0
    end
  end

  Player.body:setLinearVelocity(Player.xVel * 48, Player.yVel * 48)
end

function love.load()
  love.window.setFullscreen(true)
  love.physics.setMeter(48)
  World = love.physics.newWorld(0, GRAVITY * 48, true)
  Map = sti("levels/mainLevelLuaDraft4Final.lua", {"box2d"})

  Map:box2d_init(World)
  Map:addCustomLayer("Sprites", 4)
  Map:resize(4800, 4800)

  Player = {
    xVel = 0,
    yVel = 0,
    speed = 12,
    jumpPower = 12,
    spaceMode = false,
    isJumping = false,
    direction = "right",
    respawnX = 250,
    respawnY = 4630
  }

  local spritesLayer = Map.layers["Sprites"]
  spritesLayer.sprites = {
    player = Player
  }

  function spritesLayer:update(dt)
    if love.keyboard.isDown("space") then
      Player.spaceMode = true
      Player.body:setGravityScale(0)
    else
      Player.spaceMode = false
      Player.body:setGravityScale(1)
      HandlePlayerMovement(dt)
    end
    if Player.body:getY() > 5000 then
      Die()
    end
    local tileX, tileY = Map:convertPixelToTile(Player.body:getX(), Player.body:getY())
    local dangerLayer = Map.layers["Danger"]
    for i in pairs(dangerLayer.data) do
      for j in pairs(dangerLayer.data[i]) do
        if math.floor(tileX) + 1 == j and math.floor(tileY) + 1 == i then
          Die()
        end
      end
    end
  end

  function spritesLayer:draw()
    if Player.spaceMode and Player.direction == "left" then
      love.graphics.draw(Player.imageBlueL, Player.body:getX() - 24, Player.body:getY() - 24)
    elseif Player.spaceMode and Player.direction == "right" then
      love.graphics.draw(Player.imageBlueR, Player.body:getX() - 24, Player.body:getY() - 24)
    elseif not Player.spaceMode and Player.direction == "left" then
      love.graphics.draw(Player.imageYellowL, Player.body:getX() - 24, Player.body:getY() - 24)
    else
      love.graphics.draw(Player.imageYellowR, Player.body:getX() - 24, Player.body:getY() - 24)
    end
  end

  Player.body = love.physics.newBody(World, Player.respawnX, Player.respawnY, "dynamic")
  Player.body:setFixedRotation(true)
  Player.shape = love.physics.newRectangleShape(48, 48)
  Player.fixture = love.physics.newFixture(Player.body, Player.shape)
  Player.fixture:setCategory(2)
  Player.imageYellowL = love.graphics.newImage("art/YellowBoyL.png")
  Player.imageYellowR = love.graphics.newImage("art/YellowBoyR.png")
  Player.imageBlueL = love.graphics.newImage("art/BlueBoyL.png")
  Player.imageBlueR = love.graphics.newImage("art/BlueBoyR.png")
end

function love.update(dt)
  World:update(dt)
  Map:update(dt)
end

function love.draw()
  love.graphics.setColor(1, 1, 1)
  --love.graphics.print("Position: (" .. Player.body:getX() .. ", " .. Player.body:getY() .. ")", 10, 10)
  --love.graphics.print("Velocity: (" .. Player.xVel .. ", " .. Player.yVel .. ")", 10, 25)
  Map:draw(250 - Player.body:getX(), love.graphics.getHeight() - 300 - Player.body:getY())
end