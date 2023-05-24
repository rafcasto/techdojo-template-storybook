FROM node

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN npm set progress=false && npm install

# Build the Storybook static files
RUN npm run build-storybook

# Make port 6006 available
EXPOSE 6007

# run storybook app
CMD ["yarn", "run", "storybook"]