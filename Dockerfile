FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run storybook

CMD ["npm", "run", "storybook"]