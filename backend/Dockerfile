FROM node:16
WORKDIR /usr/app

# Copy config file to image
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

#PORT
EXPOSE 4000

CMD npm start