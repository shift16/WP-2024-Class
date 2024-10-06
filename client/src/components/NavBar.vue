<script setup lang="ts">

</script>

<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <RouterLink class="navbar-item" href="#">
            <strong>My Website</strong>
        </RouterLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="#">
                Home
            </a>

            <a class="navbar-item" href="#">
                About
            </a>

            <a class="navbar-item" href="#">
                Services
            </a>

            <a class="navbar-item" href="#">
                Contact
            </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
    </div>
</template>

<style scoped>

</style>