var urls = [
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405451249&idx=1&sn=299c84d980ff2fb6cfaa73f0dbc5ab60&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=400168815&idx=1&sn=c21b120733286b1b53592d2a5732d2df&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788004&idx=1&sn=16e61c911d6dc12955a8e96790ec6400&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788481&idx=1&sn=255f3a15b3c7d03059381beebf348a90&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406131479&idx=1&sn=cdf2217b91094a5b452b8aa4d228aa68&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788427&idx=1&sn=3aec8f7c62beac2bc0e5c8c681007c16&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202413128&idx=1&sn=42a0ddf70f56e1856a4fb0e7f4c6e942&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789285&idx=1&sn=25a2fd594193d754cce467385d09bd14&chksm=8b8b87d6bcfc0ec0a2c695dd38b60e4e2fd60c88d7097f04f0eaab60111d2cc7a173eef3209a&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789448&idx=1&sn=9c8b1abc84aeab80cb9c58e485d6ffa3&chksm=8b8b863bbcfc0f2df410c8a8338866c23a5135117f828b035c53d799695a76b4f9abea1f0821&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789372&idx=1&sn=8950bdb1df185744949462eee0319726&chksm=8b8b878fbcfc0e99589e36b804aafa831ea2813b63074f6377363c1a009f0c4b6d3d53f38385&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789494&idx=1&sn=b628101c3094ec6dc48d245a19f000aa&chksm=8b8b8605bcfc0f134a60f19961f4a69fabc10e6d45e477c92af45b949fa654e96384aa198ab4&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789485&idx=1&sn=933ef03f0c2058d520a3be45648cc0c5&chksm=8b8b861ebcfc0f08691d8012e9e6376777567efee349d99c9314b4ead8ce729edd755a29cb6d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789485&idx=1&sn=933ef03f0c2058d520a3be45648cc0c5&chksm=8b8b861ebcfc0f08691d8012e9e6376777567efee349d99c9314b4ead8ce729edd755a29cb6d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=210865197&idx=1&sn=e571e573e753e6518c24eb89c8c5dc10&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788509&idx=1&sn=e5e2a303c30adcd84443ea3436643454&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788132&idx=1&sn=cbe73cb57e990d190bf3745acf0797ae&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405585384&idx=1&sn=26354a1980df63ad2bb518677d57f51c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405585384&idx=1&sn=26354a1980df63ad2bb518677d57f51c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788283&idx=1&sn=947b4360706c4a6a1766dd9a7c4cdbcf&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788365&idx=1&sn=1fbfaacca097353df46533d010bba70d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788586&idx=1&sn=d8b1ab0587773a496cf1072b79354a8b&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788680&idx=1&sn=10a4810a1df8fbd0eba9153f1f392f0d&chksm=8b8b853bbcfc0c2d09602caf797358568203cf2bfa7fdaa84f9a4a185bd468cb53a83a35632b&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787859&idx=1&sn=839e0bbffaafa3909c78ce4bd1a66a4d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789012&idx=1&sn=bb50b48ba91e05fd421efa04b9edc5d0&chksm=8b8b84e7bcfc0df12a1613cc638eb97e26dc91deb207de69e2cc57d7a0ec68ee272e2f35ea65&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788521&idx=1&sn=6f8caa056e390ad4a0a7f63bfc3ef991&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788702&idx=1&sn=757e28dd6f732972d46a0a093ff92948&chksm=8b8b852dbcfc0c3b78b450bc74e184063b771e264bb9ea018379992d369b6b772c49c06b7c5b&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788752&idx=1&sn=79b5089399e607868d552e8f5aa78a33&chksm=8b8b85e3bcfc0cf5ca54292b44f93177e7b4b40d42416acf37a8b4fa3eefef501e1e54f3661a&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405994517&idx=1&sn=fc077035b4e20c7e19d4d6c721ad2ba3&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787357&idx=1&sn=9d65d5c3ebecb54f0b81e96b140b9ad2&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787585&idx=1&sn=e008e9dc33ee8222473330403d180308&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787585&idx=1&sn=e008e9dc33ee8222473330403d180308&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787838&idx=1&sn=86662e0abcfbbe470f2b6b40a90a7ed8&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789374&idx=1&sn=14c2e323dbd9d362fdded6f2a5dc07da&chksm=8b8b878dbcfc0e9b33dd64045dcf46b93965a81348f88678b3bcf877d647e9af1d27143516bc&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788513&idx=1&sn=5d4eec02dd443bdc8279ea64b4c2b859&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789245&idx=1&sn=0aaf488415bb2565ffe539db277f0791&chksm=8b8b870ebcfc0e187741c12afc5509ba326761ab305f6849117af9432b0d8112dfb5b4dbcdf8&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787649&idx=1&sn=03221e3e6a0b95763abe2f94d77031ff&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787649&idx=1&sn=03221e3e6a0b95763abe2f94d77031ff&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788598&idx=1&sn=7d99319861ee6c5ed19873060ec2a0d9&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405647880&idx=1&sn=28cb8ef935ecdadd57298ae40290a98f&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788569&idx=1&sn=a9cbc5d1d976747d0eb3d5d782dc0ec6&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787560&idx=1&sn=da2cd6f13dc7d49ea0f72efacb0e8294&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788247&idx=1&sn=d6243417143769593d5fae89d1979ee4&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788615&idx=1&sn=472e03e0ee949f889463c540d3e5fe67&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=200638859&idx=1&sn=4bc6bbee3866f06e9d2719cc05edf887&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789110&idx=1&sn=0c36c16b46c0048b19b53831c149e0f1&chksm=8b8b8485bcfc0d9382679c0fa806504a9ebdb1b9f068c5e15321be853c3b8cf4a5ee1c0aeb75&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789226&idx=1&sn=de6f708db49d952637e66e69fee9c497&chksm=8b8b8719bcfc0e0f0e2d961b3eaee78d007c27e21a31d0e69c998cf6268ac3cce2218aecc8c1&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=212457891&idx=1&sn=ef17deea7d2a5ddb8c6357c70fee885f&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788497&idx=1&sn=c4a1736d37e9c619ace60b609e9bca87&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788485&idx=1&sn=54fb06ab566cb1dda077242729d5b84b&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789422&idx=1&sn=eefc02f251d1f2829028884161fd41c5&chksm=8b8b865dbcfc0f4bfbf46dd96c21304a5fafd475436eb361fcb31fdf385e470bec38e23ca8de&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788625&idx=1&sn=0fc039d862b03ede5085a8745027b478&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788017&idx=1&sn=4e6d824050eef29062c010ad39ee168d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788856&idx=1&sn=439858a5ceec82ae8e0757bf4f4f3685&chksm=8b8b858bbcfc0c9d2ef669b4b599f12b68a205fc66694bbf708ea693e91828f70f0514fe8606&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788951&idx=1&sn=2f14f41a338a4278967d6fbfc3693fb0&chksm=8b8b8424bcfc0d32cf0eecfdf13d805b9e4a80976eafac0925eabd01e85a6de95dacce2a44a8&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788998&idx=1&sn=1aa7c2a672214c5a140ade2a9d5f5141&chksm=8b8b84f5bcfc0de36fc47d5d543a6663488e95abccb60e25a8dfe1d27304197cc0f1b59269b1&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406775891&idx=1&sn=4f010737ea6cf68d064dfabe618a6bb0&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788831&idx=1&sn=b8a94c8d31c82807647344cdf874b241&chksm=8b8b85acbcfc0cbaf7bab1fa08e2dd616c04e709ce2709767e5298d4ca7d8158bdfe5dad84dd&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=201432636&idx=1&sn=b42caea5af1f1424e0a68ed24b68d1f9&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788984&idx=1&sn=6af85c89cb1a0743b727a04a66737ce6&chksm=8b8b840bbcfc0d1d7518e46ed0c1041686005438e0adf875cced12b2790e5fc60e9c811a974b&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406247959&idx=1&sn=fc0f0fe4887dc1ecebb49aaf83e394a2&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788368&idx=1&sn=3e82ac8ce808ce5c6e2d9c7e902d1c09&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202701086&idx=1&sn=788ce531cc60113e24b8201ba15ec96f&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=201718614&idx=1&sn=c782ca0d3b37e2cee784c5e8b3138844&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202257541&idx=1&sn=ecf641b60f039ab6af6ff4c939bc10e6&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789310&idx=1&sn=613fd8ceac7efb37209f624e561a6fa6&chksm=8b8b87cdbcfc0edbc6addd890a7446e026a7498b33cc470497d36dd5170daba4c2e535f3820c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789310&idx=1&sn=613fd8ceac7efb37209f624e561a6fa6&chksm=8b8b87cdbcfc0edbc6addd890a7446e026a7498b33cc470497d36dd5170daba4c2e535f3820c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788898&idx=1&sn=204192e021d73229a162bb522d2189fc&chksm=8b8b8451bcfc0d47e778c043da3e06963942160162e84454b02bddb361889dca83d0c1fcc5ab&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788898&idx=1&sn=204192e021d73229a162bb522d2189fc&chksm=8b8b8451bcfc0d47e778c043da3e06963942160162e84454b02bddb361889dca83d0c1fcc5ab&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406469818&idx=1&sn=dfd29ddb723f3790d132e4a353e1c6c1&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406469818&idx=1&sn=dfd29ddb723f3790d132e4a353e1c6c1&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=401291936&idx=1&sn=189b1908e2bb5f4a06688445cf80f8b3&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787346&idx=1&sn=5ade6983e9a803b30655a16fe52bdb7c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788082&idx=1&sn=269781da183e0851e09af60a05a193ac&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=407078694&idx=1&sn=238f48c7faf134fe64b0e15543c1aca0&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406201590&idx=1&sn=692ebe6420c54e42e4aaff3367331b28&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787670&idx=1&sn=79e65428ac2c043fccc91a9b4be4b68c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=211647589&idx=1&sn=3c087b919896d79c611b722daae9da97&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=211662160&idx=1&sn=db9c850419038542b0bbb4543eead167&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=211675162&idx=1&sn=8c0961c55cfa9d8b9733bcdc78e757f8&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788727&idx=1&sn=905cd5a3a96bf8025c1dfedb056ac1f3&chksm=8b8b8504bcfc0c12a433fb29889be98a562068a84f50c4ebe587d6107c50326b55cac3dfc29d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=211038734&idx=1&sn=db92f9f67b58b77d2872ca3ec12fc880&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202755242&idx=1&sn=5bf5144d876403b18cc66614b696ac8f&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=401633181&idx=1&sn=c96520df9d592efda310c8fd0df8a478&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=401633181&idx=1&sn=c96520df9d592efda310c8fd0df8a478&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789160&idx=1&sn=75486c7882f4c24594d0533f52d7cee5&chksm=8b8b875bbcfc0e4dba0e013852cb676c0273cce69f47ea1312ecd260ccbc142fdf9ce4299a1f&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787387&idx=1&sn=42abf9a9a6aae74aba6ec4efa987599c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787500&idx=1&sn=92eda9fa74753de65f97466d41519a3a&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654789426&idx=1&sn=3967456f7bd366b1bbc69e526d65a291&chksm=8b8b8641bcfc0f5778a125f93688af87e7e1da114605d06df4ce28afd897bb70aabe0e4ec200&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788310&idx=1&sn=7a4f92210c8830894072435dbb43953e&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788831&idx=1&sn=b8a94c8d31c82807647344cdf874b241&chksm=8b8b85acbcfc0cbaf7bab1fa08e2dd616c04e709ce2709767e5298d4ca7d8158bdfe5dad84dd&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=201696733&idx=1&sn=d05d690f22de82f5163abeb44bec6c43&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405585384&idx=1&sn=26354a1980df63ad2bb518677d57f51c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405585384&idx=1&sn=26354a1980df63ad2bb518677d57f51c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=402219983&idx=1&sn=9dac5264935bb980ce9c657a923a6ee1&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406346497&idx=1&sn=071da606a405c7ad11f6023d29bf25aa&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=402102467&idx=1&sn=63ac41ad739ee6a4fdf29aa36d4da7f5&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202679409&idx=1&sn=32be5ac19084594e77163f620a6d15c4&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406775891&idx=1&sn=4f010737ea6cf68d064dfabe618a6bb0&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=211958909&idx=1&sn=3260996ba25df6ded807ef2e709d3865&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406775891&idx=1&sn=4f010737ea6cf68d064dfabe618a6bb0&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=201432636&idx=1&sn=b42caea5af1f1424e0a68ed24b68d1f9&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202012671&idx=1&sn=7e1c91a10be884a9cdd6246310238d3e&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202975283&idx=1&sn=a6c264e36ce500f4bad3d81ee820ce29&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788805&idx=1&sn=ee78d23d8240d182ebcc0c06fdde496e&chksm=8b8b85b6bcfc0ca0ffc3c4b13a9aa20d063e66b1733f3d8bde6a5fd08cbd2a46ede41a999a09&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788642&idx=1&sn=ebb135f19913cd37917cd1817fdf2946&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406967061&idx=1&sn=47b45d5a0b93e64f41d4674485d4e258&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=405680640&idx=1&sn=42b2e600a6160f84bb74661187e9fbee&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=402185596&idx=1&sn=792b7c71c88535d076717e6f80b7eed5&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787440&idx=1&sn=cc565789d414c6d48699f4f29aa023c7&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=401132900&idx=1&sn=1e391f59f885da73e1b1a64792f8d71e&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=205099164&idx=1&sn=874404a82a10262afc96913b81554dc5&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787770&idx=1&sn=940ecbed5ab34dc8ae8b0fdea8c12474&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787929&idx=1&sn=25e0065df73695686fcc9a9c549a674c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787372&idx=1&sn=bfe86823a064c42dc8c1597e68553d01&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787461&idx=1&sn=5c0ad9e973e7db1e3b562c72a5952d60&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=406438297&idx=1&sn=e8f0089397f8abd07a665dae7d79374c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787413&idx=1&sn=4fdd3757172a9895b0bf354fd8356a48&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=205439020&idx=1&sn=b748ce22617fcdafa3902f17a92864c3&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=206808865&idx=1&sn=01b1e2ae93b89679f1a068693539472c&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=204735914&idx=1&sn=e44abfa122a85022fcdb5d860af638b4&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=204389823&idx=1&sn=897ed26ccacbca0d9b52940d5ce3ad26&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=203262768&idx=1&sn=d5a5b111b79325267108581bc1848f01&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=202325407&idx=1&sn=c3702b579771f3faf868db53cd77995d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=201863207&idx=1&sn=6ca701b1d40b1dc9460c6dd8b13cbad5&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787759&idx=1&sn=35ef9630c304fd762a4c46d904af1c6f&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788828&idx=1&sn=8f76f5659d87d00d93cd58f9bf4a0615&chksm=8b8b85afbcfc0cb9641d13c9aeb0372b350750dd503ae4d9ea95039620f85885880ec84f4fe9&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788671&idx=1&sn=363a4be2241367a6c428d244f0c7949a&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788581&idx=1&sn=cd167ca15085986cfc35046622eec6bd&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788325&idx=1&sn=f9bc37cc641737134ea3ab7dcd559c57&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788350&idx=1&sn=337a0d1e16b802d8cb7b62e2c9532d97&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788040&idx=1&sn=26b7309fc7469dde6dac1b6b0b6456a7&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788258&idx=1&sn=6d2095596e26c382d2dbf57bbab2cb5d&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787432&idx=1&sn=a705ae5c5d6ac8a726322ef5df787eb4&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787444&idx=1&sn=307bc5ecb74736fc25fe016ff29847bb&scene=21#wechat_redirect",
    "http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654787327&idx=1&sn=e910c56740a018a449da04e2359ddcf6&scene=21#wechat_redirect"]
var webpage = require('webpage');

phantom.outputEncoding="gbk";

var page = webpage.create()

var u = ['http://mp.weixin.qq.com/s?__biz=MzA5NTEzNzgyMA==&mid=2654788368&idx=1&sn=3e82ac8ce808ce5c6e2d9c7e902d1c09&scene=21#wechat_redirect']
// urls = u

page.viewportSize = {width: 725, height: 500}
// page.clipRect = { top: 0, left: 150, width: 725};


page.settings.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"

var originTime = +new Date()
var startTime = +new Date()
var loadedImgCount = 0
var imgCount = 0
var summaryCount = 0
console.log('总页面数', urls.length)

function renderAction(){
  loadedImgCount++
  var now = +new Date()
  var custom = (now - startTime)/1000
  var title = page.title.replace(/\//g, '|')

  console.log('渲染第'+loadedImgCount+'张页面，耗时：'+custom+'s')
  console.log('渲染到','./page/' + title+'.pdf')
  startTime = +new Date()
  
  page.render('./page/' + title+'.pdf')
}

page.onConsoleMessage = function(msg) {

  if(msg.indexOf("IMGLOAD")>=0){
    imgCount++
    if(imgCount == summaryCount){
      renderAction()
      renderPage()
    }
  } 
}

function renderPage(){
  if(urls.length){
    var url = urls.shift()
    console.log('渲染url', url)
    page.open(url, function(){
      imgCount = 0
      var imgArray = page.evaluate(function(){
        var LoadedImgs = []
        var imgs = document.getElementsByTagName('img')
        var count =  0
        for(var i in imgs){
          var img = imgs[i]
          var imgDataSrc = img && img.getAttribute && img.getAttribute('data-src')
          var imgSrc = img && img.getAttribute && img.getAttribute('src')

          if( imgDataSrc && imgSrc && imgDataSrc !== imgSrc){
            img.onload = function(){
              console.log('[IMGLOAD]')
            }
            img.setAttribute('src', imgDataSrc)
            LoadedImgs.push({
              src: imgSrc,
              dataSrc: imgDataSrc
            })
            count++
          }
        }
        return LoadedImgs
      })
      summaryCount = imgArray.length
      if(summaryCount == 0){
        renderAction()
        renderPage()
      }
      // console.log(JSON.stringify(imgArray))
    })
  }else {
    window.setTimeout(function () {
      var cost = (+new Date() - originTime)/1000
      console.log('渲染完成,耗时', cost, 's')
      phantom.exit();
    }, 1000);
  }
}

renderPage()