# arknights-dict
Arknights [RIME](https://rime.im) dictionary

明日方舟[RIME](https://rime.im)词库

## 使用方法
本词库以繁体写成，以配合RIME使用的[OpenCC](https://github.com/byVoid/OpenCC)的设定。因此需要挂载到使用繁体词库的输入方案中。

1. 下载你需要的词库到用户文件夹中。
   - Linux参考[https://sspai.com/post/90068](https://sspai.com/post/90068)
   - Windows（小狼毫）默认位于`C:\Users\你的用户名\AppData\Roaming\Rime`（即`%APPDATA%\Rime`）。
   - macOS（鼠须管）位于`~/Library/Rime`。
2. 根据[RIME的定制指南](https://github.com/rime/home/wiki/CustomizationGuide)，为您需要的输入方案打「补靪」。（假设你使用的输入法为朙月拼音`luna_pinyin`，则在`Rime`文件夹下新增`luna_pinyin.custom.yaml`，然后输入以下内容。若已有该文件，则在末尾补充以下内容，但删掉`patch:`一行）
```
patch:
  translator/dictionary: root_pinyin
```

在同目录下建立名为`root_pinyin.dict.yaml`的文件，并写入以下内容：

```
---
name: root_pinyin
version: "1.0"
sort: by_weight
use_preset_vocabulary: true
import_tables
  - arknights-operators
  - luna_pinyin
...
```
3. 重新部署即可。
