var t=`<pre><code class="language-javascript">&lt;template&gt;
    &lt;el-pagination
        :background=&quot;background&quot;
        @prev-click=&quot;handlePrevClick&quot;
        @next-click=&quot;handleNextClick&quot;
        @current-change=&quot;handleCurrentChange&quot;
        :page-size=&quot;pageSize&quot;
        :current-page=&quot;currentPage&quot;
        layout=&quot;total , prev, slot, next &quot;
        :total=&quot;total&quot;
    &gt;
        &lt;ul class=&quot;el-pager&quot;&gt;
            &lt;li
                v-for=&quot;item in pageNums&quot;
                @click=&quot;handleCurrentChange(item)&quot;
                :class=&quot;[&#39;number&#39;, item == currentPage ? &#39;active&#39; : &#39;&#39;]&quot;
            &gt;
                {{ item }}
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/el-pagination&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    props: {
        // \u6BCF\u9875\u6570\u636E\u6570\u91CF
        pageSize: {
            default: 10
        },
        // \u5171\u6709\u591A\u5C11\u6761\u6570\u636E
        total: {
            default: 130
        },
        // \u9700\u8981\u663E\u793A\u591A\u5C11\u9875\uFF0C\u53EA\u80FD\u4E3A\u5947\u6570
        pageCount: {
            default: 5
        },
        // \u662F\u5426\u9700\u8981\u80CC\u666F
        background: {
            default: true
        }
    },
    data() {
        return {
            // \u5F53\u524D\u9875\u7801
            currentPage: 1
        };
    },
    computed: {
        // \u663E\u793A\u7684\u9875\u7801
        pageNums() {
            let isOdd = this.pageCount % 2 == 0 ? false : true;
            let result,
                count = 0,
                offset = isOdd ? (this.pageCount - 1) / 2 : this.pageCount / 2;
            if (this.pageCount &gt;= this.lastPage) {
                result = this.allPages;
                return result;
            }

            let curPageIndex = this.allPages.indexOf(this.currentPage);
            let startIndex;

            if (curPageIndex + 1 &lt;= offset) {
                startIndex = 0;
                result = this.allPages.slice(startIndex, startIndex + this.pageCount);
            } else if (this.lastPage - (curPageIndex + 1) &lt; offset) {
                startIndex = this.lastPage - this.pageCount;
                result = this.allPages.slice(startIndex, startIndex + this.pageCount);
            } else if (curPageIndex + 1 &gt;= offset) {
                startIndex = curPageIndex - offset;
                result = this.allPages.slice(startIndex, startIndex + this.pageCount);
            }
            return result;
            return result;
        },
        // \u6240\u6709\u5206\u9875\u7684\u6570\u7EC4\uFF0C\u4F8B\u5982\u67095\u9875\u5219\u8FD4\u56DE[1,2,3,4,5]
        allPages() {
            let result = [];
            for (let i = 1; i &lt;= this.lastPage; i++) {
                result.push(i);
            }
            return result;
        },
        // \u6700\u540E\u4E00\u9875\u9875\u7801
        lastPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        // \u7B2C\u4E00\u9875\u9875\u7801
        firstPage() {
            return this.total &gt; 0 ? total : 0;
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.currentPage = val;
            this.$emit(&quot;current-change&quot;, val);
        },
        handlePrevClick(val) {
            this.$emit(&quot;prev-click&quot;, val);
        },
        handleNextClick(val) {
            this.$emit(&quot;next-click&quot;, val);
        }
    },
    created() {}
};
&lt;/script&gt;
</code></pre>
`;export{t as default};
