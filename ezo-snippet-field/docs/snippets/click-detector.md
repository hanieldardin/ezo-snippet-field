---
id: click-detector
title: Click Detector
sidebar_label: Click Detector
tags: [Roblox, Lua, Beginner]
---

```lua
local button = script.Parent
button.MouseClick:Connect(function(player)
    print(player.Name .. " clicked me!")
end)
```

**Whisper Thought:**  
This snippet uses a ClickDetector to run code when a player clicks an object. Great for buttons, NPCs, or interactable parts.
