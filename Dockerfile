FROM node:18

WORKDIR /app

COPY app.js .

COPY package.json .

COPY hello.html .

COPY file.html .

RUN chmod 777 file.html

RUN npm install -y

CMD [ "echo","working",">","/app/file.html","&&","node","./app.js"]
