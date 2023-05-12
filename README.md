# 二进制状态存储器

# 介绍

> 使用二进制储存状态数据  
> 只有激活/未激活两种状态（二进制只有 0 和 1）  
> 最多同时保存 32 种状态（JS 数字精度）  
> 支持多种状态查询逻辑（与、或、非、异或）

# 安装

```
npm install --save @saatana97/state-store
pnpm add --save @saatana97/state-store
```

# 使用

```typescript
const value = 0;
const { active, inactive, toggle, status, count } = useStateStore({
    value,
    change: (val, old) => {
        value = val;
        console.info(old, val);
    },
});
```
