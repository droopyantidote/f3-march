document.addEventListener("DOMContentLoaded", function() {
    const decrementBtn = document.getElementById("decrement");
    const incrementBtn = document.getElementById("increment");
    const clearBtn = document.getElementById("clear");
    const countDisplay = document.getElementById("count");
    const errorMessage = document.getElementById("error-message");

    let count = 0;

    function updateCount() {
        countDisplay.textContent = count;
        if (count === 0) {
            errorMessage.style.display = "block";
            decrementBtn.disabled = true;
        } else {
            errorMessage.style.display = "none";
            decrementBtn.disabled = false;
        }
        if (count <= 1) {
            clearBtn.style.display = "none";
        } else {
            clearBtn.style.display = "block";
        }
    }

    decrementBtn.addEventListener("click", function() {
        if (count > 0) {
            count--;
            updateCount();
        }
    });

    incrementBtn.addEventListener("click", function() {
        count++;
        updateCount();
    });

    clearBtn.addEventListener("click", function() {
        count = 0;
        updateCount();
    });
});
