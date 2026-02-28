let MAX_ATTEMPTS = 5;
let i = 1;
let success = false;  // Declare outside the loop

do {
    let randomValue = Math.random();

    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${i}: Success (Response 200 OK) - API call PASSED after ${i} attempt(s)`);
    } else {
        console.log(`Attempt ${i}: Failed (Timeout Error) - Retrying...`);
    }

    i++;

} while (!success && i <= MAX_ATTEMPTS);

if (!success) {
    console.log(`API call FAILED after ${MAX_ATTEMPTS} attempts.`);
}