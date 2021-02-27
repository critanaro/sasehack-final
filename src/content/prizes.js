export const title = 'Prizes';

export const places = [
    {
        place: "1st Place",
        prize: "New iPad Air",
        link: "https://www.google.com/aclk?sa=L&ai=DChcSEwiC99Do3a3uAhWc7IYKHZOzD68YABAFGgJ2dQ&sig=AOD64_1Eh4UBp5UQoFTe_nzTRaczj2F02w&ctype=5&q=&ved=2ahUKEwich8Xo3a3uAhWnpFkKHadGAygQ9aACegQIEhBM&adurl="
    },
    {
        place: "2nd Place",
        prize: "Airpods Pro",
        link: "https://www.google.com/aclk?sa=L&ai=DChcSEwip56Pw3a3uAhWBvYYKHRQ5DnwYABAFGgJ2dQ&sig=AOD64_1xekfPiCWARJaRpgZzsy2siXxkdg&ctype=5&q=&ved=2ahUKEwjMkJXw3a3uAhWBzVkKHUywAY4Q9aACegQIFxBU&adurl="
    },
    {
        place: "3rd Place",
        prize: "D2 Retro Bluetooth Speaker",
        link: "https://divoominternational.com/products/divoom-ditoo-retro-pixel-art-led-bluetooth-speaker-with-smart-sleep-aid-function"
    }
].map(prize => {prize.key = `item-${prize.place}`;
    return prize;});

export const trackWinners = [
    {

        place: "First Timers Track",
        prize: "iPad 7th Gen"
    },
    {
        place: "CDK Global Track",
        prize: "TBD"
    },
    {
        place: "EchoAR Track",
        prize: "$50 Amazon Gift Card (per team)",
        prize2: "3-months of EchoAR Business Tier",
        prize3: "Feature on EchoAR website"
    },
    {
        place: "Lilie Track",
        prize: "TBD"
    }
].map(prize => {prize.key = `item-${prize.place}`;
    return prize;});




