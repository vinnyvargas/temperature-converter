const buttonConvert = document.getElementById('convertButton')

buttonConvert.addEventListener('click', function() {
const temperature = document.getElementById('temperatureNumber')
const temperatureNumber = Number(temperature.value)
const result = document.getElementById('result')


if(isNaN(temperatureNumber) || temperature.value === ''){
    result.textContent = 'Please enter a valid number.'
} else {
    const fahrenheit = (temperatureNumber * 1.8) + 32
    result.textContent = `${temperatureNumber}°C is ${fahrenheit.toFixed(1)}°F`
}
}) 





