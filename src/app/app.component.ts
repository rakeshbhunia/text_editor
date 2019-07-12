import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class AppComponent {
  title = 'text-editor';
public text_user: string = "";
public tools: object = {
         items: [
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
                'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
                'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
                'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
        };

	onSubmit(){
		console.log("8 "+this.text_user);
		//console.log("100" + form)
		//console.log("200"+this.fromRTE)
	}
}
