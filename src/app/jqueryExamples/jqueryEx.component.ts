import { Component } from "@angular/core";
let $ = null;
@Component({
    templateUrl: "./jqueryEx.component.html"
})
export class JqueryExamples {

    constructor() {
        $ = window['$']
        this.testJquery();
    }

    testJquery() {
        $(document).ready(function () {
            console.log("document loaded");
            $('form').html("<input type='text' id='name'/>");
            $('#name').val('Amulya');
            $('#name').after("<p id='nameValue'></p>");
            $('#nameValue').text($('#name').val())
            $('<h4>Welcome</h4>').insertBefore('#name');
            $("#myDiv a:first").attr("href", function (idx, href) {
                return "/new/" + href;
            });
        });
    }

}