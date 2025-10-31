# 第一阶段：构建React应用
FROM node:18-alpine AS build

# 创建工作目录
WORKDIR /app

# 复制依赖文件并安装
COPY package*.json ./
RUN npm install

# 复制源码并打包
COPY . .
RUN npm run build


# -----------------------------------------------------------------
# 第二阶段：Nginx 运行静态文件
FROM nginx:alpine

# 删除默认的Nginx文件（可选）
# RUN rm -rf /usr/share/nginx/html/*

# 复制构建好的静态文件到Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# 构建工具用的是Vite，路径应为 /app/dist

EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]