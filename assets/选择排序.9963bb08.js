var n=`<pre><code class="language-javascript">function sort(arr) {
  let length = arr.length;
  let minIndex, tmp;

  for (let i = 0; i &lt; length; i++) {
    minIndex = i;
    for (let j = i + 1; j &lt; length; j++) {
      if (arr[minIndex] &gt; arr[j]) {
        minIndex = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

console.log(sort([9, 2, 11, 18, 3, 17, 8, 80, 20, 5, 15, 24, 6, 1, 7]));
</code></pre>
`;export{n as default};
