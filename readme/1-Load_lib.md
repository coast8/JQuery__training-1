
# Loading

three ways to load jquery

- [Document ready](#document-ready)
- [Function](#function)
- [Window load](#window-load)


<a name="document-ready"></a>
## 1. Document ready

Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the `list` command:

    <script type="text/javascript">

        $(document).ready(function(){
            alert('o DOM carregou!');
        });

    </script>

<a name="function"></a>
## 2. Function

Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the `list` command:

    <script type="text/javascript">
        
        $(function(){
            ///
        });
        
    </script>

<a name="window-load"></a>
## 3. window load

Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the `list` command:

    <script type="text/javascript">
        
        $(window).load(function(){
            alert('elementos carregados');  
        });

    </script>