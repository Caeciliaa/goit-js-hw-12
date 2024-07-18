@import url('./reset.css');

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #242424;
  background-color: rgba(255, 255, 255, 0.87);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.container {
  overflow: hidden;
  width: 1440px;
  padding: 15px;
  margin: 0 auto;
}

.search-button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #4e75ff;
  color: #fff;
  font-weight: 500;
  transition: background-color 250ms ease-in-out;
}

.search-button:hover {
  background-color: #6c8cff;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  column-gap: 24px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 0;
}

.gallery-item {
  max-width: 360px;
  min-width: 290px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
}

.gallery-image {
  width: 100%;
  aspect-ratio: 360/200;
  object-fit: cover;
  object-position: center;
  transition: transform 250ms ease-in-out;
}

.gallery-link:hover > .gallery-image,
.gallery-link:focus > .gallery-image {
  transform: scale(1.044);
}

.inform-container {
  display: flex;
  gap: 2px;
  justify-content: space-around;
  align-items: center;
  padding: 4px 4px;
  width: 100%;
}
.inform-item {
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: 0.04em;
  color: #2e2f42;
  text-align: center;
}
.inform-title {
  font-weight: 400;
  font-size: 12px;
  line-height: 2;
  letter-spacing: 0.04em;
  text-align: center;
}

.form-search {
  max-width: 403px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
}

.search-input {
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  flex: 1;
}

input,
textarea {
  display: block;
  border: 1px solid #808080;
  border-radius: 4px;
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 8px;
  margin-top: 8px;
  transition: border-color 250ms ease-in-out;
}

input::placeholder {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: #2e2f42;
}

input:focus,
input:active {
  border-color: #000;
}

label {
  display: block;
}

.loader {
  width: 20px;
  height: 12px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #775252;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.6s 0.3s ease infinite alternate;
}
.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  width: 20px;
  height: 12px;
  background: currentColor;
  position: absolute;
  border-radius: 4px;
  top: 0;
  right: 110%;
  animation: animloader 0.6s ease infinite alternate;
}
.loader::after {
  left: 110%;
  right: auto;
  animation-delay: 0.6s;
}

@keyframes animloader {
  0% {
    width: 20px;
  }
  100% {
    width: 48px;
  }
}

.hidden {
  display: none;
}

.container-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
}
import { showError, createMarkup, list, lightbox } from './js/render-functions';
import { searchImages } from './js/pixabay-api';