module.exports.config = {
    name: 'math2',
    version: '1.0.0',
    hasPermssion: 0,
    credits: 'Nguyễn Minh Huy (LorenBot)',
    description: 'Math 2.0 với nhiều chức năng xam lul hơn=)))',
    commandCategory: 'khác',
    usages: '/math help\n/math <CodeWord> <dữ liệu yêu cầu>',
    cooldowns: 0,
    dependencies: {},
    envConfig: {},
};

function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n <= 3) {
        return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function sumTo(n) {
    return (n * (n + 1)) / 2;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}

function hasLetter(s) {
    return /[a-zA-Z]/.test(s.replace('+', '').replace('*', '').replace('/', '').replace('-', '').replace('**', '').replace('^', ''));
}

module.exports.run = function ({ api, event, args }) {
    let resultMessage;

    if (!args[0] && !args[1]) {
        resultMessage = 'Thiếu dữ liệu, Số hoặc là CodeWord...';
    } else {
        switch (args[0]) {
            case 'help':
            case 'menu':
                resultMessage = '1. Kiểm tra số nguyên tố:\n - Kiểm tra 1 số có phải là số nguyên tố hay không\n - Dữ liệu yêu cầu: <số cần kiểm tra>\n - CodeWord: isprime\n\n2. Tính giai thừa:\n - Tính giai thừa của số mà bạn nhập\n - Dữ liệu yêu cầu: <số cần tính giai thừa>\n - CodeWord: factorial\n\n3. Tính tổng từ 1 đến X\n - Tính tổng từ 1 đến X\n - Dữ liệu yêu cầu: <X>\n - CodeWord: sumofnumber\n\n4. Tính số Fibonacci\n - Tính số Fibonacci\n - Dữ liệu yêu cầu: <số cần tính>\n - CodeWord: fibonacci\n\n5. Kiểm tra số chính phương\n - Kiểm tra một số có phải là số chính phương hay không\n - Dữ liệu yêu cầu: <số cần kiểm tra>\n - CodeWord: issquare\n\n🔮Sử dụng bằng cách nhập lệnh \"/math <CodeWord> <dữ liệu yêu cầu>\" hoặc bạn có thể dùng chế độ đơn giản bằng phép tính +,-,*,/ bằng cách nhập số trực tiếp như sau: \"/math <số cần tính (VD: 4+5)>\".';
                break;
            case 'isprime':
            case 'songuyento':
                const resultMath1 = isPrime(parseInt(args[1]));
                resultMessage = `${args[1]} ${resultMath1 === true ? 'là số nguyên tố' : 'không phải là số nguyên tố'}`;
                break;
            case 'factorial':
            case 'giaithua':
                const resultMath2 = factorial(parseInt(args[1]));
                resultMessage = `Giai thừa của ${args[1]} là ${resultMath2}`;
                break;
            case 'sumofnumber':
            case 'tongdayso':
                const resultMath3 = sumTo(parseInt(args[1]));
                resultMessage = `Tổng từ dãy số 1 đến ${args[1]} là ${resultMath3}`;
                break;
            case 'fibonacci':
                const resultMath4 = fibonacci(parseInt(args[1]));
                resultMessage = `Số Fibonacci thứ ${args[1]} là ${resultMath4}`;
                break;
            case 'issquare':
            case 'sochinhphuong':
                const resultMath5 = isSquare(parseInt(args[1]));
                resultMessage = `${args[1]} ${resultMath5 === true ? 'là số chính phương' : 'không phải là số chính phương'}`;
                break;
            default:
                if (!hasLetter(args[0])) {
                    const resultMath6 = eval(args[0]);
                    resultMessage = `Kết quả: ${resultMath6}`;
                } else {
                    resultMessage = 'Vui lòng nhập CodeWord hoặc phép tính cơ bản (VD: 2+3+4+5*30)';
                }
                break;
        }
    }
    return api.sendMessage(`≈ ≈ ≈ ≈ ≈ Math 2.0 ≈ ≈ ≈ ≈ ≈\n\n${resultMessage}`, event.threadID, event.messageID);
};