function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge = new Array(bridge_length).fill(0);

    while (true) {
      bridge.shift();
      bridge.push(0);
      answer += 1;
      let bridgeWeight = bridge.reduce((prev, curr) => prev + curr);

      if (((bridgeWeight + truck_weights[0]) <= weight)) {
        const truck = truck_weights.shift();
        bridge[bridge_length - 1] = truck;
        bridgeWeight += truck;
      }

      if (bridgeWeight === 0) {
        break;
      }
    }
    return answer;
  }