check: test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter spec \
		--timeout 300 \
		--require should \
		--growl \
		test/test.js

etcd:
	docker build -t etcdx/etcd .
	docker run -d -p 4001:4001 -p 7001:7001 -name etcdx-etcd1 -t etcdx/etcd

.PHONY: test