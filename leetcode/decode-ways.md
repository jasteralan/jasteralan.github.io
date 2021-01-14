# Decode Ways - 找出數字自串轉成字母的排列組合數

用 Tail recursive 作

`pattern` 的作用是避免重複的再被計算一次，有些長度很長的 case，沒有 `pattern` 的話會過不了