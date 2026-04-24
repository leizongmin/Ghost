<p align="center">
  <a href="https://ghost.org/#gh-light-mode-only" target="_blank">
    <img src="https://user-images.githubusercontent.com/65487235/157884383-1b75feb1-45d8-4430-b636-3f7e06577347.png" alt="Ghost" width="200px">
  </a>
  <a href="https://ghost.org/#gh-dark-mode-only" target="_blank">
    <img src="https://user-images.githubusercontent.com/65487235/157849205-aa24152c-4610-4d7d-b752-3a8c4f9319e6.png" alt="Ghost" width="200px">
  </a>
</p>

<p align="center">
    <a href="https://ghost.org/">Ghost 官网</a> •
    <a href="https://forum.ghost.org">社区论坛</a> •
    <a href="https://ghost.org/docs/">官方文档</a> •
    <a href="https://github.com/TryGhost/Ghost/blob/main/.github/CONTRIBUTING.md">参与贡献</a> •
    <a href="https://twitter.com/ghost">Twitter</a>
    <br /><br />
    <a href="https://ghost.org/">
        <img src="https://img.shields.io/badge/downloads-100M+-brightgreen.svg" alt="Downloads" />
    </a>
    <a href="https://github.com/TryGhost/Ghost/releases/">
        <img src="https://img.shields.io/github/release/TryGhost/Ghost.svg" alt="Latest release" />
    </a>
    <a href="https://github.com/TryGhost/Ghost/actions">
        <img src="https://github.com/TryGhost/Ghost/workflows/CI/badge.svg?branch=main" alt="Build status" />
    </a>
    <a href="https://github.com/TryGhost/Ghost/contributors/">
        <img src="https://img.shields.io/github/contributors/TryGhost/Ghost.svg" alt="Contributors" />
    </a>
</p>

> [!NOTE]
> **热爱开源？我们正在招聘！** Ghost 正在寻找全职高级工程师[加入我们的团队](https://careers.ghost.org)。

<a href="https://ghost.org/"><img src="https://user-images.githubusercontent.com/353959/169805900-66be5b89-0859-4816-8da9-528ed7534704.png" alt="Ghost is the most popular open source, headless Node.js CMS which already works with all the tools you know and love." /></a>

Ghost 是目前非常流行且成熟的**开源无头 (Headless) Node.js CMS（内容管理系统）**，同时也是一个专业的博客与内容发布平台。

如果你想省去部署和维护的烦恼，最简单的方式是使用官方托管服务：**[Ghost(Pro)](https://ghost.org/pricing/)**。只需两分钟，即可拥有全球 CDN 加速、自动备份、安全防护和全托管维护的生产环境实例。你的支持将 100% 用于 Ghost 基金会，资助该开源项目的持续开发！

---

## 🏗 项目架构与技术栈

本项目是一个大型的 **Monorepo（单体仓库）**，基于 **Yarn Workspaces** 和 **Nx** 进行构建与包管理。核心目录结构如下：

*   **`ghost/core/` (后端核心)**: 基于 Node.js 和 Knex.js 编写，提供核心 API、内容管理、数据库交互等服务。
*   **`ghost/admin/` & `apps/admin-x-*` (后台管理)**: 
    *   历史版本基于 Ember.js (`ghost/admin/`) 构建。
    *   目前正在向现代化技术栈迁移，大量引入基于 **React** 和 **Vite** 的 Admin-X 设计系统及框架 (`apps/admin-x-*`)。
*   **`apps/` (前端应用与业务模块)**:
    *   `portal/` & `signup-form/`: 读者的会员订阅、注册与支付模块。
    *   `comments-ui/`: 官方评论系统前端界面。
    *   `activitypub/`: ActivityPub 协议支持模块（接入联邦宇宙）。
    *   `sodo-search/`: 全局搜索组件。
*   **测试与基建 (`e2e/`, `docker/`)**: 使用 **Docker** 提供本地开发环境，使用 **Playwright** 进行端到端（E2E）自动化测试，依赖 **GitHub Actions** 进行 CI/CD 流水线作业。

---

## 🚀 快速开始

如果你想在自己的服务器或本地运行 Ghost，最推荐的方式是使用我们的官方 **CLI 工具**：

```bash
npm install ghost-cli -g
```

### 本地开发安装
添加 `local` 参数即可在本地快速启动（耗时不到 1 分钟）- [本地安装文档](https://ghost.org/docs/install/local/)

```bash
ghost install local
```

### 生产环境安装
在服务器上运行完整安装，包含自动配置 LetsEncrypt SSL 证书 - [生产环境安装文档](https://ghost.org/docs/install/ubuntu/)

```bash
ghost install
```

---

## 📚 文档与开发者指南

更多信息请查阅我们的 [官方文档](https://ghost.org/docs/)：
*   [推荐的主机托管方案](https://ghost.org/docs/hosting/)
*   [如何正确升级 Ghost](https://ghost.org/docs/update/)
*   [Ghost 主题开发指南](https://ghost.org/docs/themes/)
*   [API 使用指南](https://ghost.org/docs/content-api/)

### 贡献者与高级开发者
对于希望为 Ghost 贡献代码，或想要修改/定制核心代码的开发者，我们建议遵循完整的开发环境搭建指南：
[贡献指南 (Contributor guide)](https://ghost.org/docs/contributing/) • [源码开发环境搭建 (Developer setup)](https://ghost.org/docs/install/source/)

---

## ❤️ 赞助商

非常感谢我们的赞助商和合作伙伴让 Ghost 成为可能。如果您有兴趣赞助 Ghost 并支持该项目，请查看我们在 [GitHub Sponsors](https://github.com/sponsors/TryGhost) 上的主页。

**[DigitalOcean](https://m.do.co/c/9ff29836d717)** • **[Fastly](https://www.fastly.com/)** • **[Tinybird](https://tbrd.co/ghost)** • **[BairesDev](https://www.bairesdev.com)** • **[Hostinger](https://www.hostinger.com/)**

---

## 💬 寻求帮助

任何人都可以从 [Ghost 社区论坛](https://forum.ghost.org/) 中获得来自大量开发者的帮助与支持。**Ghost(Pro)** 客户可享受 24/7 全天候邮件支持。

想要获取最新的新闻和产品更新，请[订阅我们的更新日志邮件列表](https://ghost.org/changelog/)，或者在 [Twitter 上关注我们](https://twitter.com/Ghost)。

---

## 📄 许可证与商标

Copyright (c) 2013-2026 Ghost Foundation - 采用 [MIT 许可证](LICENSE)发布。
Ghost 和 Ghost 徽标是 Ghost Foundation Ltd. 的商标。关于可接受的使用方式，请参阅我们的[商标政策](https://ghost.org/trademark/)。
