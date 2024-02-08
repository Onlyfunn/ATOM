const switchBtns = document.querySelectorAll('.switch')

if (switchBtns) {
	switchBtns.forEach(item => {
		item.addEventListener('click', function (event) {
			document.body.classList.toggle('_dark')
			document.querySelectorAll('.switch').forEach(item => {
				item.classList.toggle('_dark')
			})
		})
	})
}

const burger = document.querySelector('.header__burger')
const container = document.querySelector('.header__container')

document.addEventListener('click', function (event) {
	const click = event.composedPath()
	if (
		!click.includes(container) &&
		!click.includes(burger) &&
		!click.includes(document.querySelector('.modal__box'))
	) {
		container.classList.remove('_active')
		burger.classList.remove('_active')
		document.querySelector('.modal').classList.remove('_open')
		document.body.classList.remove('_fixed')
	}
})

if (burger) {
	burger.addEventListener('click', function (e) {
		container.classList.toggle('_active')
		burger.classList.toggle('_active')
		document.body.classList.toggle('_fixed')
	})
}

const tabsItems = document.querySelectorAll('.tabs__item')
if (tabsItems) {
	tabsItems.forEach(item => {
		item.addEventListener('click', function (event) {
			document.querySelectorAll('.tabs__item').forEach(item => {
				item.classList.remove('_active')
			})
			item.classList.add('_active')
			document.querySelectorAll('.tabs__block').forEach(item => {
				item.classList.remove('_active')
			})
			document.querySelector(`#_${event.target.id}`).classList.add('_active')
		})
	})
}

const moreBtn = document.querySelectorAll('.tabs__button')
const blogItems = document.querySelectorAll('.projects__items')
if (blogItems) {
	for (blogItem of blogItems) {
		if (blogItem.querySelectorAll('.projects__item').length <= 9) {
			if (blogItem.parentElement.querySelector('.tabs__button')) {
				blogItem.parentElement.querySelector('.tabs__button').style.display =
					'none'
			}
		}
	}
}

if (moreBtn) {
	for (btn of moreBtn) {
		btn.addEventListener('click', function (event) {
			const cards =
				event.target.parentElement.querySelectorAll('.projects__item')
			for (let card of cards) {
				card.style.display = 'flex'
			}
			event.target.style.display = 'none'
		})
	}
}

const headerCall = document.querySelector('.header__call')

if (headerCall) {
	headerCall.addEventListener('click', function (event) {
		document.querySelector('.modal').classList.add('_open')
		document.body.classList.add('_fixed')
	})
}

const modalClose = document.querySelector('.modal__close')

if (modalClose) {
	modalClose.addEventListener('click', function (event) {
		document.querySelector('.modal').classList.remove('_open')
		document.body.classList.remove('_fixed')
	})
}

window.addEventListener('keydown', e => {
	if (e.key == 'Escape') {
		document.querySelector('.modal').classList.remove('_open')
		container.classList.remove('_active')
		burger.classList.remove('_active')
		document.body.classList.remove('_fixed')
	}
})

const inputs = document.querySelectorAll('.form-modal__input')
if (inputs) {
	for (input of inputs) {
		input.addEventListener('focus', function (event) {
			event.target.parentElement
				.querySelector('.form-modal__text')
				.classList.toggle('_active')
		})
		input.addEventListener('focusout', function (event) {
			event.target.parentElement
				.querySelector('.form-modal__text')
				.classList.toggle('_active')
		})
	}
}
