## react-native-scrollable-tab-view 进阶---添加自定义图标 ##


### 1、导入包react-native-scrollable-tab-view ###
> npm install react-native-scrollable-tab-view --save

### 2、添加react-native-vector-icons ###
> npm install react-native-vector-icons --save
> 
> npm link
> 
npm link命令可以将一个任意位置的npm包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行该npm包。
> 
我们也可以通过编辑android/app/build.gradle 添加下面的行达到同样的目的:
`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)介绍：
>
**官方介绍**：Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling. 总的来说，我们可以使用这个玩意儿给我们的app增加更多漂亮的图标，让我们更加专注代码。

## Bundled Icon Sets

[Browse all](https://oblador.github.io/react-native-vector-icons/).

* [`Entypo`](http://entypo.com) by Daniel Bruce (**411** icons) 
* [`EvilIcons`](http://evil-icons.io) by Alexander Madyankin & Roman Shamin (v1.8.0, **70** icons) 
* [`Feather`](http://feathericons.com) by Cole Bemis & Contributors (v3.2.2, **240** icons) 
* [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy (v4.7.0, **675** icons) 
* [`Foundation`](http://zurb.com/playground/foundation-icon-fonts-3) by ZURB, Inc. (v3.0, **283** icons)
* [`Ionicons`](http://ionicframework.com/docs/v2/ionicons/) by Ben Sperry (v3.0.0, **859** icons)
* [`MaterialIcons`](https://www.google.com/design/icons/) by Google, Inc. (v3.0.1, **932** icons)
* [`MaterialCommunityIcons`](https://materialdesignicons.com/) by MaterialDesignIcons.com (v2.1.19, **2120** icons)
* [`Octicons`](http://octicons.github.com) by Github, Inc. (v6.0.1, **177** icons)
* [`Zocial`](http://zocial.smcllns.com/) by Sam Collins (v1.0, **100** icons)
* [`SimpleLineIcons`](http://simplelineicons.com/) by Sabbir & Contributors (v2.4.1, **189** icons)

![search](https://i.imgur.com/lt0W3Sc.png)
![name](https://i.imgur.com/LQJ8xAV.png)

将最后的红色区域就是我们最终需要的图标的名称，即name的值。

##好了，介绍完要点，我们就开始编写CustomTabBar组件了

 1.新建一个CustomTabBar.js 导入 

    import Icon from 'react-native-vector-icons/Ionicons';

 2.我们希望每个Tab的图标和名称都是外部组件通过prop传递进来，而不是内部写死，这样有利于扩展，所以我们添加两个prop：tabNames和tabIconNames
    
	propTypes = {
  	...
  	tabNames: React.PropTypes.array, // 保存Tab名称
  	tabIconNames: React.PropTypes.array, // 保存Tab图标
	}
3.实现render方法

   	render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }

4.实现renderTabOption方法

	renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]} // 通过参数传递过来的图标
                        size={30}
                        color={color}/>
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
代码分析：

> 首先，判断i是否是当前选中的activeTab，来使用不同的颜色，
> 
> 然后：
TouchableOpacity：点击触发onPress方法，使用goToPage跳转到对应的tab
> 
Icon：设置name(图标，使用tabIconNames[i]获取)，size(图标大小)，color(图标颜色)
Text：设置文本（使用tabNames[i]获取），color(文字颜色)

5.使用CustomTabBar
 
   ---在Main.js文件中import即可

    import CustomTabBar from './CustomTabBar'
	import ScrollableTabView  from 'react-native-scrollable-tab-view';


6.引入漂亮的icon，和tab名称

	constructor(props){
        super(props);
        this.state = {
            tabNames: ['主页', '购物', '发现', '我的'],
            tabIconNames: ['ios-search', 'ios-albums', 'ios-paper-plane', 'ios-person-add']
        };
    }

7.最后在Main.js 中调用即可：

	render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <CustomTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>
                <Home tabLabel='主页'/>
                <Shop tabLabel='购物'/>
                <Find tabLabel='发现'/>
                <Mine tabLabel='我的'/>
            </ScrollableTabView>
        );
    }