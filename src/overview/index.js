import React,{Component} from 'react'
import marked from 'marked'


class OverView extends Component{
    constructor(){
        super(...arguments)

        this.rawMarkup = this.rawMarkup.bind(this)
    }

    rawMarkup(value){
        var rawMarkup = marked(value, {sanitize: true});
        return { __html: rawMarkup };
    }

    render(){
        return(
            <div>
                  <span dangerouslySetInnerHTML={this.rawMarkup(this.props.value)} />
            </div>                
        )
    }
}

export default OverView