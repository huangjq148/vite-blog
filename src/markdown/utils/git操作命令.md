```
git branch 查看分支

git branch [分支名] 创建分支

git branch -d [分支名] 删除分支

git branch -D [分支名] 强制删除分支

git add . 添加文件

git commit -m "" 添加提交描述

git checkout -b [分支名] 创建并切换分支

git checkout [分支名] 切换分支

git cherry-pick [提交记录 id（uuid）] 拉取指定提交到本分支

git branch -v 查看每个分支最后一次提交记录

git log 查看当前分支提交记录

git branch --merged 查看哪个分支合并到当前分支了

git branch --no-merged 查看哪个分支未合并到当前分支

# git 回退

$ git reset --hard HEAD^ 回退到上个版本

$ git reset --hard HEAD~3 回退到前 3 次提交之前，以此类推，回退到 n 次提交之前

$ git reset --hard commit_id 退到/进到 指定 commit 的 sha 码

# 强推到远程：

$ git push origin HEAD --force

```
