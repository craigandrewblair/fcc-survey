$(document).ready(function() {    
            
        $(function() {

            $(".dropdown-menu a").click(function() {
                $(".btn:first-child").text($(this).text());
                $(".btn:first-child").val($(this).text());
            });

        }); 
            
}
