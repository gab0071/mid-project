'use strict'

window.addEventListener('load', function () {
    console.log('im ready')

    // slider

    $(document).ready(function () {
        if (window.location.href.indexOf('index') > -1) {

            $('.png').bxSlider({
                mode: 'fade',
                captions: true,
                responsive: true
            });
        }
    })


    // posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Title text one',
                date: new Date(),
                content: `'Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry.Lorem Ipsum has been
                   the industry's standard
                   dummy text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it
                   to make a type specimen
                   book.It has survived not only five centuries, but also
                   the leap into electronic typesetting,
            remaining essentially
                   unchanged.It was popularised in the 1960s with the
                   release of Letraset sheets containing Lorem
                   Ipsum passages, and more
                   recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem
                   Ipsum.'`
            },
            {
                title: 'Title text two',
                date: new Date(),
                content: `'Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry.Lorem Ipsum has been
                   the industry's standard
                   dummy text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it
                   to make a type specimen
                   book.It has survived not only five centuries, but also
                   the leap into electronic typesetting,
            remaining essentially
                   unchanged.It was popularised in the 1960s with the
                   release of Letraset sheets containing Lorem
                   Ipsum passages, and more
                   recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem
                   Ipsum.'`
            },
            {
                title: 'Title text three',
                date: new Date(),
                content: `'Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry.Lorem Ipsum has been
                   the industry's standard
                   dummy text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it
                   to make a type specimen
                   book.It has survived not only five centuries, but also
                   the leap into electronic typesetting,
            remaining essentially
                   unchanged.It was popularised in the 1960s with the
                   release of Letraset sheets containing Lorem
                   Ipsum passages, and more
                   recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem
                   Ipsum.'`
            },
            {
                title: 'Title text four',
                date: new Date(),
                content: `'Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry.Lorem Ipsum has been
                   the industry's standard
                   dummy text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it
                   to make a type specimen
                   book.It has survived not only five centuries, but also
                   the leap into electronic typesetting,
            remaining essentially
                   unchanged.It was popularised in the 1960s with the
                   release of Letraset sheets containing Lorem
                   Ipsum passages, and more
                   recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem
                   Ipsum.'` }
        ]
        posts.forEach((element, index) => {
            var post = ` 
           <article class="art_post">
               <h2>${element.title}</h2>
               <span class="date_post">${element.date}</span>
               <p>${element.content}</p>
               <a href="#"
                   class="btn_more">read more</a>
           </article>`
            $('#posts').append(post)
        })
    }

    // theme selector
    var theme = $('#theme')
    $('#to_change').click(function () {
        theme.attr('href', 'css/theme.css')
    })

    $('#to_change_b').click(function () {
        theme.attr('href', 'css/theme_black.css')
    })


    // scroll up
    $('.up').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 0
        }, 500)
        return false
    })


    // false login
    $('#login form').submit(function () {
        var name = $('#name').val()
        localStorage.setItem('name', name)
    })

    var name = localStorage.getItem('name')
    if (name != null && name != 'undefined') {
        var original = $('#original p')
        original.html('<strong>' + 'Welcome, dear ' + name + '👋🥂' + '</strong>')
        original.append('<a href="#" id="signout">Signout</a>')

        $('#login').hide()
        $('#signout').click(function () {
            localStorage.clear()
            location.reload()
        })
    }

    // accordion 
    if (window.location.href.indexOf('about') > -1) {
        $(function () {
            $('#accordion').accordion()
        }

        )
    }

    // watch 
    if (window.location.href.indexOf('watch') > -1) {
        setInterval(function () {
            var watch_web = moment().format('hh: mm: ss')
            $('#watch').html(watch_web)
        }, 1000)
    }

    // form validation
    if (window.location.href.indexOf('contact') > -1) {
        $("#form_contact input[name='birth']").datepicker()
        
        $.validate({
            modules: 'date, security',
            scrollTopOnError: true,
            errorMessagePosition: 'top'
        });
    }
})