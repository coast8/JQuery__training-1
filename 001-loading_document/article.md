
# Loading

three ways to load jquery.

table of contents

- [1 Document ready](#document-ready)
- [2 Function](#function)
- [3 Window load](#window-load)


<a name="document-ready"></a>
## 1. Document ready

    <script type="text/javascript">

        $(document).ready(function(){
            alert('o DOM carregou!');
        });

    </script>

<a name="function"></a>
## 2. Function

    <script type="text/javascript">
        
        $(function(){
            ///
        });
        
    </script>

<a name="window-load"></a>
## 3. window load

    <script type="text/javascript">
        
        $(window).load(function(){
            alert('elementos carregados');  
        });

    </script>