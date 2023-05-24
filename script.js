// Select all elements with the class "counter"
const counters = document.querySelectorAll(".counter")

// Loop through each counter element
counters.forEach((counter) => {
    // Set the initial text value of the counter to "0"
    counter.innerText = "0"

    // Function to update the counter
    const updateCounter = () => {
        // Get the target value from the "data-target" attribute of the counter element and convert it to a number
        const target = +counter.getAttribute("data-target")

        // Get the current value of the counter element and convert it to a number
        const c = +counter.innerText

        // Calculate the increment value to reach the target value over 200 iterations
        const increment = target / 200

        // Check if the current value is less than the target value
        if (c < target) {
            // Update the counter's text value by incrementing it by the calculated increment
            counter.innerText = `${Math.ceil(c + increment)}`

            // Call the updateCounter function again after a short delay (1 millisecond)
            setTimeout(updateCounter, 1)
        } else {
            // If the current value is equal to or greater than the target value, set the counter's text value to the target value
            counter.innerText = target
        }
    }

    // Call the updateCounter function to start updating the counter
    updateCounter()
})
