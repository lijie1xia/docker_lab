# Docker 容器化实验合集

## 📦 实验简介
包含 Flask 后端容器化、MySQL 数据卷持久化、React 前端两阶段构建的完整实验。

## 🚀 实验目标
- 掌握 Dockerfile 编写与镜像构建
- 理解容器与宿主机端口映射
- 掌握数据卷 Volume 的持久化机制
- 熟悉前后端项目的容器化部署流程

## 🧱 项目结构


## 🛠️ 使用方法
```bash
# 构建镜像
docker build -t flask-app ./flask-app
docker build -t react-app ./my-react-app

# 启动MySQL容器
docker run -d -p 3307:3306 -e MYSQL_ROOT_PASSWORD=1234 -v mysql-data:/var/lib/mysql mysql:8.0

# 运行Flask
docker run -d -p 5000:9090 flask-app
