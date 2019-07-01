NODE=/opt/nvm/versions/node/v10.15.1/bin/node
APP?=${NODE} --perf-basic-prof ./.cache/scripts/docs.js init --verbose

x8:
	0x ${APP} --output-dir trace

perf:
	sudo perf record -e cycles:u -- ${APP}

record-clean:
	perf script > perfs.out
	cp perfs.out perfs-raw.out
	sed -i \
		-e "/v8::internal/d" \
		perfs.out

record-flame:
	stackvis perf < perfs-raw.out > flamegraph-raw.htm
	xdg-open flamegraph-raw.htm
	stackvis perf < perfs.out > flamegraph.htm
	xdg-open flamegraph.htm

record-collapse:
	stackvis collapsed < perfs.out > collapsed.out > flamegraph.svg
	InkScape flamegraph.svg

clean:
	rm -f isolate* perf.* perfs* flamegraph* processed.txt