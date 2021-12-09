var r=`<pre><code class="language-javascript">function quick_sort(arr, from, to) {
  if (from &gt;= to) return;
  let left = from,
    right = to,
    base = arr[from];
  while (left &lt; right) {
    while (arr[right] &gt;= base &amp;&amp; left &lt; right) {
      right--;
    }
    arr[left] = arr[right];
    while (arr[left] &lt;= base &amp;&amp; left &lt; right) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = base;
  console.log(left, right, arr);
  quick_sort(arr, from, left - 1);
  quick_sort(arr, right + 1, to);
  //return arr;
}
quick_sort([9, 2, 1, 7, 5, 8, 0, 6, 4, 3], 5, 9);
</code></pre>
`;export{r as default};
