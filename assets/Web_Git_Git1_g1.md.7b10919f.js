import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.d62c974d.js";const g=JSON.parse('{"title":"删除所有 Commit 提交记录","description":"","frontmatter":{},"headers":[],"relativePath":"Web/Git/Git1/g1.md","filePath":"Web/Git/Git1/g1.md"}'),t={name:"Web/Git/Git1/g1.md"},l=n(`<h1 id="删除所有-commit-提交记录" tabindex="-1">删除所有 Commit 提交记录 <a class="header-anchor" href="#删除所有-commit-提交记录" aria-label="Permalink to &quot;删除所有 Commit 提交记录&quot;">​</a></h1><ul><li>创建新分支，并切换到该分支</li><li>暂存所有文件</li><li>提交所有更改</li><li>删除主分支 master</li><li>重命名当前分支为 master</li><li>强制推送本地分支</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git checkout --orphan latest_branch</span></span>
<span class="line"><span style="color:#e1e4e8;">git add -A</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -am &quot;First Commit&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch -D master</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch -m master</span></span>
<span class="line"><span style="color:#e1e4e8;">git push -f origin master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout --orphan latest_branch</span></span>
<span class="line"><span style="color:#24292e;">git add -A</span></span>
<span class="line"><span style="color:#24292e;">git commit -am &quot;First Commit&quot;</span></span>
<span class="line"><span style="color:#24292e;">git branch -D master</span></span>
<span class="line"><span style="color:#24292e;">git branch -m master</span></span>
<span class="line"><span style="color:#24292e;">git push -f origin master</span></span></code></pre></div>`,3),i=[l];function o(p,c,r,m,d,h){return a(),e("div",null,i)}const u=s(t,[["render",o]]);export{g as __pageData,u as default};
