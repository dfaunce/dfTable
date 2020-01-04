$(function() {
  
  $.fn.dfTable = function(options) {
    
    var i = 0, $th = null;
    
    // This is the easiest way to have default options.
    var settings = $.extend({
      table: {
        styles: {
          borderCollapse: "collapse",
          width:"100%"
        }
      },
      thead: {
        columns: ["#", "First", "Last", "Age"],
        styles: {
          bgColor: "#000",
          textColor: "#fff",
          padding: "3px 12px",
          fontSize:"1em",
          fontWeight:"bold",
          textAlign:"center",
          border:"1px solid #ddd"
        }
      },      
      urls: {
        insert: "",
        edit: "",
        delete: ""
      },
      colors: {
        th: "#000",
        thText: "#fff",
        rowOdd: "#fff",
        rowEven: "#e3f8ff",
        text: "#333"
      }
    }, options );
    
    var $master = this;    
    
    var $table = document.createElement("table");
    $table.classList = "dfTable";
    $table.style.cssText = "width:" + settings.table.styles.width + ";border-collapse:" + settings.table.styles.borderCollapse + ";";
    $master.append($table);
    
    $table = $master.find("table");
    
    var $thead = document.createElement("thead");
    var $tbody = document.createElement("tbody");
    var $tfoot = document.createElement("tfoot");
    
    $table.append($thead).append($tbody).append($tfoot);
    
    
    
    var $theadRow = document.createElement("tr");
    for (i = 0; i < settings.thead.columns.length; i++) {
      $th = document.createElement("th");
      $th.innerHTML = settings.thead.columns[i];
      $th.style.cssText = "border:" + settings.thead.styles.border + ";background-color:" + settings.thead.styles.bgColor + ";color: " + settings.thead.styles.textColor + ";padding:" + settings.thead.styles.padding + ";text-align:" + settings.thead.styles.textAlign + ";font-weight:" + settings.thead.styles.fontWeight + ";";
      $theadRow.append($th);
    }   
    $thead.append($theadRow); 
    
    var $tr = document.createElement("tr");
    $("<td>1</td>").appendTo($tr);
    $("<td>David</td>").appendTo($tr);
    $("<td>Faunce</td>").appendTo($tr);
    $("<td>35</td>").appendTo($tr);
    
    $tbody.append($tr);
    
  };
  
  $("#container").dfTable();
  
});
