---
id: datastore-save
title: Save to DataStore
sidebar_label: Save to DataStore
tags: [Roblox, DataStore, Save]
---

```lua
local DataStoreService = game:GetService("DataStoreService")
local ds = DataStoreService:GetDataStore("GoldStore")

game.Players.PlayerRemoving:Connect(function(player)
    local success, err = pcall(function()
        ds:SetAsync(player.UserId, player.leaderstats.Gold.Value)
    end)
    if not success then
        warn("Failed to save data: " .. err)
    end
end)
```

**Whisper Thought:**  
Use this snippet to save a player's gold (or other stats) when they leave the game. Wrap in `pcall` to prevent crashing on failure.
