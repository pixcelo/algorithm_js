// Dijkstra's algorithm
function dijkstra(nodes) {
    const start = nodes[0];
    // Record visited edge
    const visited = new Set();
    const routesFromStart = new Map();
    // Record the distance from the starting point
    routesFromStart.set(start, {distance: 0});
    for (const n of nodes) {
        if (n != start) {
            // Assign infinity to all edges except start point
            routesFromStart.set(n, {distance: Number.MAX_VALUE});
        }
    }
    let current = start;
    let routes = new Map();
    while (current != null) {
        visited.add(current)
        for (const edge of current.edges) {
            // Calculate the shortest distance from that edge to a neighboring edge
            // and update if it is lower than the calculated value
            if (edge.cost + routesFromStart.get(current).distance < routesFromStart.get(edge.to).distance) {
                routesFromStart.set(edge.to, {distance: edge.cost + routesFromStart.get(current).distance});
                routes.set(current, edge.to);
            }
        }
        let cheapestNodeDistance = Number.MAX_VALUE;
        current = null;
        // Select the smallest edge among the edges
        // whose shortest distance has been computed that has not been visited.
        for (const city of routesFromStart.keys()) {
            if (!visited.has(city) && cheapestNodeDistance > routesFromStart.get(city).distance) {
                cheapestNodeDistance = routesFromStart.get(city).distance;
                current = city;
            }
        }
    }
    return routesFromStart.get(nodes[nodes.length - 1]).distance;
}

// Create arg Nodes
function createNode(id) {
    return {
        edges: [],
        id: id
    };
}
function addNode(from, to, cost) {
    from.edges.push({
        to: to,
        cost: cost
    });
}
function createNodes() {
    const node1 = createNode(1);
    const node2 = createNode(2);
    const node3 = createNode(3);
    const node4 = createNode(4);
    const node5 = createNode(5);
    const node6 = createNode(6);
    const node7 = createNode(7);

    addNode(node1, node2, 10);
    addNode(node1, node3, 16);
    addNode(node1, node4, 12);
    addNode(node2, node3, 18);
    addNode(node2, node5, 4);
    addNode(node4, node3, 3);
    addNode(node3, node6, 1);
    addNode(node6, node7, 9);
    addNode(node5, node7, 21);

    return [node1, node2, node3, node4, node5, node6, node7];
}
const nodes = createNodes();
//console.log(nodes);
console.log(dijkstra(nodes));
