# arknights-dict
Arknights [RIME](https://rime.im) dictionary

明日方舟[RIME](https://rime.im)词库

## 开发状态
目前仅开发了
- 干员名称（`arknights-operators`）
- 肉鸽地图名称（`arknights-is-level-names`）

未来计划支持：
- SS、危机合约等活动的名称；
- 游戏术语；
- 社区常用词。

如果您需要更完整的词库，参见[这篇少数派文章](https://sspai.com/post/90068)。

## 使用方法
本词库以繁体写成，以配合RIME使用的[OpenCC](https://github.com/byVoid/OpenCC)的设定。因此需要挂载到使用繁体词库的输入方案中。

1. 下载你需要的词库到用户文件夹中。
   - Linux参考[https://sspai.com/post/90068](https://sspai.com/post/90068)
   - Windows（小狼毫）默认位于`C:\Users\你的用户名\AppData\Roaming\Rime`（即`%APPDATA%\Rime`）。
   - macOS（鼠须管）位于`~/Library/Rime`。
2. 根据[RIME的定制指南](https://github.com/rime/home/wiki/CustomizationGuide)，为您需要的输入方案打「补靪」。（假设你使用的输入法为朙月拼音`luna_pinyin`，则在`Rime`文件夹下新增`luna_pinyin.custom.yaml`，然后输入以下内容。
```
patch:
  translator/dictionary: root_pinyin
```
若已有该文件，则只需要补充一行（空白缩进记得留）
```
  translator/dictionary: root_pinyin
```

3. 在同目录下建立名为`root_pinyin.dict.yaml`的文件，并写入以下内容：

```
---
name: root_pinyin
version: "1.0"
sort: by_weight
use_preset_vocabulary: true
import_tables
  - arknights-operators
  - arknights-is-level-names
  - luna_pinyin
...
```
`arknights`开头的即是本仓库的词库。如果不需要哪个词库，删掉那一行。

4. 重新部署即可。
