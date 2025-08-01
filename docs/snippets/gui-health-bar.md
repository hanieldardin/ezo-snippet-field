---
id: gui-health-bar
title: GUI Health Bar
sidebar_label: GUI Health Bar
tags: [Roblox, GUI, Health]
---

```lua
local player = game.Players.LocalPlayer
local healthBar = script.Parent

player.CharacterAdded:Connect(function(char)
    local humanoid = char:WaitForChild("Humanoid")
    humanoid.HealthChanged:Connect(function()
        healthBar.Size = UDim2.new(humanoid.Health / humanoid.MaxHealth, 0, 1, 0)
    end)
end)
```

**Whisper Thought:**  
This connects the player's health to a GUI bar. A great starter for custom HUDs in adventure or battle games.
