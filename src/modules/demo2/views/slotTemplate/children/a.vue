<template>
    <div>
        这个a <br />
        default  默认插槽
        <slot :a="1" :b="2"></slot>
        <slot name="nameA"></slot>
        <slot name="ceshi"></slot>
    </div>
</template>