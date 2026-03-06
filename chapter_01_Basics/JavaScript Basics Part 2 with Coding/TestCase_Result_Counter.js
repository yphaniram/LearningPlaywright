let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let PassCnt = 0, FailCnt = 0, SkipCnt = 0
let TotTests = testResults.length

for (let i = 0; i < testResults.length; i++) {

    if (testResults[i] == "pass")
        PassCnt++
    else if (testResults[i] == "fail")
        FailCnt++
    else if (testResults[i] == "skip")
        SkipCnt++
}

let PassRate = (PassCnt / TotTests) * 100

console.log("Total Tests :", TotTests)
console.log("Passed Tests :", PassCnt)
console.log("Failed Tests :", FailCnt)
console.log("Skipped Tests :", SkipCnt)
console.log("Pass Rate :", PassRate + "%")

if (PassCnt == TotTests) {
    console.log("Verdict: Ready for release")
}
else if (FailCnt <= 2) {
    console.log("Verdict: Review before release")
}
else {
    console.log("Verdict: Block release")
}