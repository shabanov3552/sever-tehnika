// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyLockStatus, bodyUnlock, bodyLock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//#region Глобальный клик

document.addEventListener("click", function (e) {

   // очистка input по клику на крестик
   if (e.target.closest('.form__clear-svg') || e.target.closest('.js-clear-input')) {
      let line = e.target.closest('.form__line') || e.target.closest('.live-search__line');
      let input =
         line.querySelector('.form__input') ||
         line.querySelector('.form__txt') ||
         line.querySelector('.live-search__input');
      let clearButton = line.querySelector('.form__clear-svg') || line.querySelector('.js-clear-input');


      input.value = '';
      input.classList.remove('_form-focus');
      input.parentElement.classList.remove('_form-focus');
      clearButton.classList.remove('_active');
      // Inputmask.remove(input);
      // input.style.height = `auto`;
   }

   // автовысота для textarea
   if (e.target.closest('textarea')) {
      txtarAutoHeight(e.target)
   }

   // спрятать/показать input в личкабе
   if (e.target.closest('.personal-data__change')) {
      changeData(e.target)
      e.preventDefault()
   }

   // смена текста кнопки в личкабе
   if (e.target.closest('.order__more-btn')) {
      let target = e.target.closest('.order__more-btn')
      target.classList.contains('_spoller-active') ? target.innerHTML = 'Свернуть детали заказа' : target.innerHTML = 'Показать детали заказа';
      e.preventDefault()
   }

   // спрятать/показать input в личкабе
   if (e.target.closest('.js-edit')) {
      changeData(e.target)
   }
});

//#endregion

//#region Перемещение модалки с фильтрами под .wrapper

const filtersPopup = document.querySelector('#filters-more');

if (filtersPopup) {
   filtersPopup.remove();
   document.querySelector('.popup-box').insertAdjacentElement("beforeend", filtersPopup);
   getFilterColumns(filtersPopup);
}

function getFilterColumns(popup) {
   const columns = popup.querySelectorAll('.filters__col');
   const popupWrapper = popup.querySelector('.filters__wrapper');
   columns.length > 1 ? popupWrapper.classList.add('many-cols') : null;
}

//#endregion

//#region Шаринг в деталке

let shareButton = document.getElementById('share-button');
if (shareButton) {
   let thisUrl = window.location.href
   let thisTitle = document.title;
   shareButton.addEventListener('click', function () {
      // Проверка поддержки navigator.share
      if (navigator.share && isMobile.any()) {

         // navigator.share принимает объект с URL, title или text
         navigator.share({
            title: thisTitle,
            url: thisUrl
         })
            .then(function () {
               // Shareing successfull
            })
            .catch(function () {
               // Sharing failed
            })

      } else {
         flsModules.popup.open('#share-popup');
         copyUrl();
      }
   })
}
function copyUrl() {
   const copyButton = document.querySelector('.share__button');
   const copyInput = document.querySelector('.share__input');

   copyInput.value = window.location.href;
   setTimeout(() => {
      copyInput.focus();
   }, 100);

   copyButton.addEventListener("click", function (e) {
      copyInput.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      copyButton.innerHTML = 'Ссылка скопированна';
      copyButton.classList.remove('btn__orange');
      copyButton.setAttribute('disabled', 'true');
   });
}

//#endregion

//#region автовысота для textarea

function txtarAutoHeight(target) {
   const el = target;
   if (el.closest('textarea')) {

      let origHeight
      if (el.dataset.height) {
         origHeight = el.dataset.height
      } else {
         origHeight = el.scrollHeight
         el.dataset.height = origHeight
      }
      origHeight = Number(origHeight)
      el.style.height = el.setAttribute('style', 'height: ' + (origHeight + 1) + 'px');
      el.addEventListener('input', e => {
         if (el.scrollHeight > origHeight) {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 10 + 'px';
         } else {
            el.style.height = 'auto';
            el.style.height = origHeight + 'px';
         }
      });
   }
}

//#endregion

//#region спрятать/показать input в личкабе

function changeData(target) {
   let fieldChunk = target.closest('.personal-info__field-chunk');
   let confirmButton = fieldChunk.querySelector('.personal-info__confirm-btn');

   fieldChunk.classList.add('edit-mode-active');
   confirmButton.addEventListener("click", function (e) {
      fieldChunk.classList.remove('edit-mode-active');
      fieldChunk.classList.add('status-message-active');
      setTimeout(() => {
         fieldChunk.classList.remove('status-message-active');
      }, 3000);
   });
   // document.addEventListener('keydown', function (e) {
   //    if (e.code === 'Escape' || e.code === 'Enter' || e.code === 'NumpadEnter') {
   //       el.classList.remove('_active');
   //       el.classList.add('show-msg');
   //       setTimeout(() => {
   //          el.classList.remove('show-msg')
   //       }, 3000);
   //    }
   // });
}

//#endregion

//#region Добавление классов для кнопок на странице оформления при загрузке и обновлении сстраницы

window.addEventListener("load", function (e) {
   const target = document.querySelector('.radio-buttons');
   if (target) {

      const config = {
         attributes: true,
         childList: true,
         subtree: true
      };

      function styleButtonChange() {
         const pickUpPointButtons = document.querySelectorAll('.radio-buttons__inner button, .radio-buttons__inner .btn');

         pickUpPointButtons.forEach(btn => {
            btn.setAttribute('class', '')
            btn.style = 'display: flex; justify-content:center; align-items: center; text-align: center;';
            btn.classList.add('radio-buttons__btn', 'btn', 'btn_grey');
         });
      }
      styleButtonChange();

      const callback = function (mutationsList, observer) {
         for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
               styleButtonChange();
            }
         }
      };

      const observer = new MutationObserver(callback);

      observer.observe(target, config);
   }
});

//#endregion

//#region hover на ссылках в боковом каталоге

const sidebarCatalogMenuChunk = document.querySelector('.sidebar-catalog__menu-chunk');
if (sidebarCatalogMenuChunk !== null) {
   const sidebarCatalogMenu = sidebarCatalogMenuChunk.querySelector('.sidebar-catalog__menu');
   const sidebarRect = sidebarCatalogMenuChunk.querySelector('.sidebar-catalog__hover-rect')
   sidebarCatalogMenuChunk.addEventListener('mouseover', (e) => {
      let target = e.target.closest('.sidebar-catalog__link');
      if (e.target.classList.contains('sidebar-catalog__link')) {
         sidebarRect.style.bottom = `${sidebarCatalogMenu.offsetHeight - ((target.offsetTop + target.clientHeight) - sidebarCatalogMenu.scrollTop)}px`
      }
   })
}

//#endregion

//#region Открыть/закрыть боковой каталог + Открытие закрытие подкатегорий в каталоге

function sidebarCatalogActions(e) {
   const wrapper = document.querySelector('.wrapper');
   const openButton = e.target.closest('.js-catalog-menu-open') ? e.target.closest('.js-catalog-menu-open') : null;
   const closeButton = e.target.closest('.js-catalog-menu-close') ? e.target.closest('.js-catalog-menu-close') : null;
   const backButton = e.target.closest('.js-catalog-menu-back') ? e.target.closest('.js-catalog-menu-back') : null;
   const menuItem = e.target.closest('[data-catalog-menu-item]') ? e.target.closest('[data-catalog-menu-item]') : null;
   const activeLink = document.querySelector('.catalog-menu__item._active');
   const activeBlock = document.querySelector('.catalog-menu__section._active');

   if (openButton) {
      wrapper.classList.toggle('catalog-menu-open');
      if (window.matchMedia('(max-width:991.98px)').matches) {
         bodyLock();
      }
   }

   if (closeButton) {
      wrapper.classList.remove('catalog-menu-open');
      closeSubMenu(activeLink, activeBlock, wrapper);
      bodyUnlock(300);
   }

   if (menuItem) {
      const subMenuId = menuItem.dataset.catalogMenuItem ? menuItem.dataset.catalogMenuItem : null;
      const subMenu = document.querySelector(`[data-catalog-menu-section="${subMenuId}"]`);

      if (subMenu) {

         if (activeLink && activeLink !== menuItem) {
            closeSubMenu(activeLink, activeBlock, wrapper);
            wrapper.classList.add('sublist-menu-open');
            menuItem.classList.add('_active');
            subMenu.classList.add('_active');
            console.log(1);
         } else if (menuItem === activeLink) {
            closeSubMenu(activeLink, activeBlock, wrapper);
            console.log(2);
         } else {
            wrapper.classList.add('sublist-menu-open');
            menuItem.classList.add('_active');
            subMenu.classList.add('_active');
            console.log(3);
         }
         e.preventDefault();
      } else {
         if (activeLink) {
            closeSubMenu(activeLink, activeBlock, wrapper);
            e.preventDefault();
         }
      }
   }

   if (backButton) {
      closeSubMenu(activeLink, activeBlock, wrapper);
   }

   if (wrapper.classList.contains('catalog-menu-open') && !e.target.closest('.catalog-menu') && !openButton) {
      wrapper.classList.remove('catalog-menu-open');
      closeSubMenu(activeLink, activeBlock, wrapper);
   }
}

function closeSubMenu(activeLink, activeBlock, wrapper) {
   wrapper.classList.remove('sublist-menu-open');
   if (!activeLink && !activeBlock) {
      return
   }
   activeLink.classList.remove('_active');
   activeBlock.classList.remove('_active');
}

document.addEventListener("click", sidebarCatalogActions);

//#endregion

//#region Кнопка вверх и лого

if (document.querySelector('.broadcast')) {

   let buttonToTop = function (e) {
      let btnTop = document.querySelector('.broadcast');
      let scr_val = window.pageYOffset + document.documentElement.clientHeight;
      let scrollHeight = Math.max(
         document.body.scrollHeight, document.documentElement.scrollHeight,
         document.body.offsetHeight, document.documentElement.offsetHeight,
         document.body.clientHeight, document.documentElement.clientHeight
      );
      scr_val >= (scrollHeight - 50) ? btnTop.classList.add('_active') : btnTop.classList.remove('_active');
   };
   window.addEventListener('scroll', buttonToTop);
}
//#endregion

//#region Плавающая линия для табов

document.querySelectorAll(".float-line").forEach(e => {
   floatLine(e)
});

function floatLine(node) {
   if (!node) return

   node.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("float-line__item")) {
         if (node.closest('.float-line__horizontal')) {
            node.style.setProperty(
               "--underline-offset-y",
               `${e.target.offsetTop}px`
            );
            node.style.setProperty(
               "--underline-height",
               `${e.target.offsetHeight}px`
            );
         } else {
            node.style.setProperty(
               "--underline-width",
               `${e.target.offsetWidth}px`
            );
            node.style.setProperty(
               "--underline-offset-x",
               `${e.target.offsetLeft}px`
            );
         }
      }
   });
   node.addEventListener("mouseleave", () => {
      if (node.closest('.float-line__horizontal')) {
         node.style.setProperty("--underline-height", "0")
      } else {
         node.style.setProperty("--underline-width", "0")
      }
   });
}

//#endregion

//#region Переключатель отображения плиток в каталоге

const layout = document.querySelector('.js-layout');
if (layout) {



   if (localStorage.getItem('layout')) {
      document.querySelector('.main-catalog__cards, .favorites__cards').classList.add('row');
      layout.querySelector(".js-layout__row").classList.add('_active');
      layout.querySelector(".js-layout__column").classList.remove('_active');
   }


   layout.addEventListener("click", function (e) {
      let target = e.target;
      let cards = document.querySelector('.main-catalog__cards, .favorites__cards')
      let rowBtn = layout.querySelector(".js-layout__row")
      let colBtn = layout.querySelector(".js-layout__column")



      if (target.closest('.js-layout__column')) {
         cards.classList.remove('row')
         localStorage.removeItem('layout')
      } else if (target.closest('.js-layout__row')) {
         cards.classList.add('row')
         localStorage.setItem("layout", 'row')
      }
      if (target.closest('.js-layout__row')) {
         colBtn.classList.remove('_active')
         rowBtn.classList.add('_active')
      } else {
         colBtn.classList.add('_active')
         rowBtn.classList.remove('_active')
      }
   });
}

//#endregion

//#region высота строк в сравнении 

window.addEventListener("load", function () {
   const dataName = Array.from(document.querySelectorAll('[data-name]'));
   let names = [];
   dataName.forEach(el => {
      if (!names.includes(el.dataset.name)) {
         names.push(el.dataset.name)
      }
   });
   for (const name of names) {
      setHeight(name)
   }
   function setHeight(name) {
      const nodeName = document.querySelector(`[data-main=${name}]`);
      const node = document.querySelectorAll(`[data-name=${name}]`);
      let heights = []
      heights.push(nodeName.scrollHeight);
      node.forEach(el => {
         heights.push(el.scrollHeight);
      });
      let maxHei = Math.max(...heights);
      node.forEach(element => {
         element.style.height = maxHei + 'px';
      });
      nodeName ? nodeName.style.height = maxHei + 'px' : null;
   }
   let btnChek = document.querySelector(".radio-inline input[type=\"radio\"]:checked");
   if (btnChek) {
      btnChek.closest('.radio-inline').classList.add('checked');
   }
});

//#endregion

//#region выбор всех чекбоксов

// js-allCheck

document.addEventListener('change', e => {
   let target = e.target;
   if (target.classList.contains('js-allCheck')) {
      let table = target.closest('.merchant-cabinet__table')
      let checkboxes = table.querySelectorAll('.merchant-cabinet__checkbox input');
      target.checked ? checkboxes.forEach(e => e.checked = true) : checkboxes.forEach(e => e.checked = false);
   }
});

//#endregion

//#region Функционал дропдаунов открыть\закрыть

document.addEventListener("click", function (e) {
   const target = e.target;
   const ddWrapper = target.closest('[data-dropdown]');
   const ddActive = document.querySelector('._dd-active');

   if (ddWrapper) {
      dropdownAction(e, ddWrapper, ddActive);
   } else if (ddActive) {
      ddActive.classList.remove('_dd-active');
   }
});

function dropdownAction(e, ddWrapper, ddActive) {
   const target = e.target;
   const ddButton = ddWrapper.querySelector('[data-dropdown-button]');

   if (target == ddButton) {
      if (ddActive && ddActive !== ddWrapper) {
         ddActive.classList.remove('_dd-active');
      }

      ddWrapper.classList.toggle('_dd-active');
      e.preventDefault();
   }
}

//#endregion

//#region Загрузка файлов с превью

class FileUploader {
   constructor(element) {
      this.fileUpload = element;
      this.fileUploadInput = this.fileUpload.querySelector('.file-upload__input');
      this.fileUploadText = this.fileUpload.querySelector('.file-upload__pseudo-input span');
      this.fileUploadPreview = this.fileUpload.querySelector('.file-upload__preview');
      this.maxFiles = +this.fileUploadInput.dataset.maxFiles;
      this.maxSize = this.fileUploadInput.dataset.maxSize * 1024 * 1024;
      this.fileList = [];

      this.fileUploadInput.addEventListener('change', this.handleFilesChange.bind(this));
      this.fileUploadPreview.addEventListener('click', this.handleFileDelete.bind(this));
   }

   handleFilesChange() {
      Array.from(this.fileUploadInput.files).forEach(item => {
         if (!this.fileList.some(obj => obj.name === item.name)) {
            if (this.fileList.length >= this.maxFiles) {
               this.setTextMessage(`Превышено количество файлов, максимум ${this.maxFiles}`);
               return;
            }

            this.fileList.push(item);
            const currentTotalSize = this.fileList.reduce((acc, file) => acc + file.size, 0);

            if (currentTotalSize > this.maxSize) {
               this.fileList.pop();
               this.setTextMessage(`Превышен допустимый объем файлов, максимум ${this.fileUploadInput.dataset.maxSize} Мб`);
               return;
            }
         }
      });
      this.updateFileInput();
   }

   handleFileDelete(e) {
      const target = e.target;
      if (target.closest('.file-upload__remove-preview')) {
         const fileItem = target.closest('.file-upload__preview-item');
         const fileName = fileItem.dataset.fileName;
         this.fileList = this.fileList.filter(file => file.name !== fileName);
         this.updateFileInput();
      }
   }

   setTextMessage(message) {
      this.fileUploadText.textContent = message;
      setTimeout(() => {
         this.fileUploadText.textContent = 'Прикрепить файл';
      }, 5000);
   }

   renderFileList() {
      this.fileUploadPreview.innerHTML = '';
      this.fileList.forEach(file => {
         this.fileUploadPreview.insertAdjacentElement('beforeend', this.createFilePreview(file));
      });
   }

   createFilePreview(file) {
      const filePreview = document.createElement('div');
      filePreview.classList.add('file-upload__preview-item');
      filePreview.dataset.fileName = file.name;
      filePreview.insertAdjacentHTML('beforeend', `
         <svg class="file-upload__remove-preview" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 4.95059L10.88 3.76471L8 6.81412L5.12 3.76471L4 4.95059L6.88 8L4 11.0494L5.12 12.2353L8 9.18588L10.88 12.2353L12 11.0494L9.12 8L12 4.95059Z" fill="#8A8A8A" />
         </svg>
      `);

      if (file.type.includes('image')) {
         const reader = new FileReader();
         const img = document.createElement('img');
         img.classList.add('file-upload__preview-image');
         filePreview.insertAdjacentElement('afterbegin', img);
         reader.onload = e => img.src = e.target.result;
         reader.readAsDataURL(file);
      } else {
         filePreview.insertAdjacentHTML('afterbegin', `<span>${file.name}</span>`);
         filePreview.classList.add('file-upload__preview-item_doc');
      }
      return filePreview;
   }

   updateFileInput() {
      const dataTransfer = new DataTransfer();
      this.fileList.forEach(file => dataTransfer.items.add(file));
      this.fileUploadInput.files = dataTransfer.files;
      this.renderFileList();
   }
}

document.querySelectorAll('.js-file-upload').forEach(uploadElement => new FileUploader(uploadElement));

//#endregion