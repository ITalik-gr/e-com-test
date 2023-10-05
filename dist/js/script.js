let tabsItem = document.querySelectorAll('.tabs-item'),
    tabsContent = document.querySelectorAll('.tabs-content');

tabsItem.forEach((item) => {
  item.addEventListener('click', () => {
    let link = item.getAttribute('data-link')

    tabsItem.forEach((item) => {
      item.classList.remove('tabs-item--active')
    })
    item.classList.add('tabs-item--active');

    tabsContent.forEach(item => {
      item.classList.remove('tabs-content--active')
      if(item.getAttribute('data-tab') == link) {
        item.classList.add('tabs-content--active')
      }
    })

  })
})

