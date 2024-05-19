# 组件开发

## 使用前准备

### 使用当前 nvm

  ```bash
  nvm use
  ```

  或者

  ```bash
nvm use $(cat .nvmrc)
```

### 安装pnpm

```bash
npm install -g pnpm
```

### 安装依赖

```bash
pnpm install
```

1. 安装pnpm
2. 安装依赖

```bash
pnpm install
```

## 目录结构

```txt
.
├── package.json
├── packages
│   ├── components
│   ├── core
│   ├── docs
│   ├── hooks
│   ├── init.sh
│   ├── play
│   ├── theme
│   └── utils
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── readMe
├── tsconfig.json
└── tsconfig.node.json

```
