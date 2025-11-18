/* advanced algorithms: Korasaju */
// strongly connected components in Digraphs
import { Stack } from 'datastructures-js';

class Korasaju {
    stronglyComponents(n: number, edges: number[][]): number[] {
        const adj = Array.from({ length: n }, () => new Array<number>());
        const adjRev = Array.from({ length: n }, () => new Array<number>());
        
        for (const [u, v] of edges) {
            adj[u].push(v);
            adjRev[v].push(u);
        }

        const firstDFS = (): Stack<number> => {
            const stack = new Stack<number>();
            const visited = new Array(n).fill(false);
            
            const dfs = (src: number) => {
                visited[src] = true;

                for (const dst of adjRev[src]) {
                    if (!visited[dst]) dfs(dst);
                }

                stack.push(src);
            };

            for (let i = 0; i < n; ++i) {
                if (!visited[i]) dfs(i);
            }

            return stack;
        };

        const secondDFS = (stack: Stack<number>): number[] => {
            const components: number[] = [];
            const visited = new Array(n).fill(false);
            let label = 0;

            const dfs = (src: number) => {
                visited[src] = true;
                components[src] = label;

                for (const dst of adj[src]) {
                    if (!visited[dst]) dfs(dst);
                }
            }

            while (!stack.isEmpty()) {
                const v = stack.pop()!;

                if (!visited[v]) {
                    dfs(v); 
                    ++label;
                }
            }

            return components;
        };

        return secondDFS(firstDFS());
    }

    public static main(): void {}
}

Korasaju.main();