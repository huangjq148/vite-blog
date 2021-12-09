```javascript
<template>
    <el-pagination
        :background="background"
        @prev-click="handlePrevClick"
        @next-click="handleNextClick"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :current-page="currentPage"
        layout="total , prev, slot, next "
        :total="total"
    >
        <ul class="el-pager">
            <li
                v-for="item in pageNums"
                @click="handleCurrentChange(item)"
                :class="['number', item == currentPage ? 'active' : '']"
            >
                {{ item }}
            </li>
        </ul>
    </el-pagination>
</template>
<script>
export default {
    props: {
        // 每页数据数量
        pageSize: {
            default: 10
        },
        // 共有多少条数据
        total: {
            default: 130
        },
        // 需要显示多少页，只能为奇数
        pageCount: {
            default: 5
        },
        // 是否需要背景
        background: {
            default: true
        }
    },
    data() {
        return {
            // 当前页码
            currentPage: 1
        };
    },
    computed: {
        // 显示的页码
        pageNums() {
            let isOdd = this.pageCount % 2 == 0 ? false : true;
            let result,
                count = 0,
                offset = isOdd ? (this.pageCount - 1) / 2 : this.pageCount / 2;
            if (this.pageCount >= this.lastPage) {
                result = this.allPages;
                return result;
            }

            let curPageIndex = this.allPages.indexOf(this.currentPage);
            let startIndex;

            if (curPageIndex + 1 <= offset) {
                startIndex = 0;
                result = this.allPages.slice(startIndex, startIndex + this.pageCount);
            } else if (this.lastPage - (curPageIndex + 1) < offset) {
                startIndex = this.lastPage - this.pageCount;
                result = this.allPages.slice(startIndex, startIndex + this.pageCount);
            } else if (curPageIndex + 1 >= offset) {
                startIndex = curPageIndex - offset;
                result = this.allPages.slice(startIndex, startIndex + this.pageCount);
            }
            return result;
            return result;
        },
        // 所有分页的数组，例如有5页则返回[1,2,3,4,5]
        allPages() {
            let result = [];
            for (let i = 1; i <= this.lastPage; i++) {
                result.push(i);
            }
            return result;
        },
        // 最后一页页码
        lastPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        // 第一页页码
        firstPage() {
            return this.total > 0 ? total : 0;
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.currentPage = val;
            this.$emit("current-change", val);
        },
        handlePrevClick(val) {
            this.$emit("prev-click", val);
        },
        handleNextClick(val) {
            this.$emit("next-click", val);
        }
    },
    created() {}
};
</script>

```
