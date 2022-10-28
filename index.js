
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment()
{
    countEl.textContent = count
    count += 1
}

function save()
{
    previous = saveEl.textContent + count + " - "
    saveEl.textContent = previous
    countEl.textContent = 0
    count = 0
}