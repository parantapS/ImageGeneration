// get DOM element to the image output
const outputImg = document.getElementById('output-img');
// get DOM element to the submit button
const submitBtn = document.getElementById('submit-btn');

// add event listener to the submit button
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    // get DOM element fr input field
    let promptInput = document.getElementById('instruction');
    console.log('Prompt Input Element:', promptInput.value);
    
    // disable the button to prevent multiple clicks
    submitBtn.disabled = true;
    submitBtn.textContent = 'Generating...';
    outputImg.innerHTML = 'Generating...'; // clear previous image

    getImage(promptInput.value);

});

// function to get image from the server
async function getImage(prompt) {
    try {
        console.log('Generating image for prompt:', prompt);
        // outputImg.innerHTML = `<p style="color: orange;align-items: center;">${prompt}</p>`;
        const response  = await fetch('/generate-image', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        })
        
        const data = await response.json();
        console.log('Response Data:', data);

        // outputImg.innerHTML = `<img src="${data.imageUrl}" alt="Generated Image" />`;
        outputImg.innerHTML = `<img src="data:image/png;base64,${data.image}" alt="Generated Image" />`;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create';   

    } catch (error) {
        console.error('Error generating image:', error);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create';
        outputImg.innerHTML = `<p style="color: red;align-items: center;">Error generating image. Please try again.</p>`;
        
    }
}
