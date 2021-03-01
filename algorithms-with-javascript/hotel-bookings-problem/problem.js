function areBookingsPossible (timeline, roomCount) {
    let labeledTimeline = [];
    let ARRIVAL = 'arrival';
    let DEPARTURE = 'departures';
    let currentCount = 0;
    for (let i = 0; i < timeline.length; i++) {
        labeledTimeline.push([timeline[i][0], ARRIVAL]);
        labeledTimeline.push([timeline[i][1], DEPARTURE]);
    }

    labeledTimeline.sort((a, b) => a[0] - b[0]);

    for (const schedule of labeledTimeline) {
        if (schedule[1] === ARRIVAL) {
            currentCount++;
        } else if (schedule[1] === DEPARTURE) {
            currentCount--;
        }

        if (currentCount > roomCount) return false;
    }

    return true;
}

const timeline = [[1, 3], [4, 6], [6, 10], [9, 12]]
const roomCount = 1
console.log(areBookingsPossible(timeline, roomCount));